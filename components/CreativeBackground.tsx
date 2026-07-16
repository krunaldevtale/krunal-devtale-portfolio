"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";

interface BlobConfig {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseRadius: number;
}

interface StarConfig {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  phase: number;
  depth: number; // for parallax
}

const CreativeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Initialize large soft colored blobs
    const blobs: BlobConfig[] = [
      {
        x: width * 0.25,
        y: height * 0.3,
        targetX: width * 0.25,
        targetY: height * 0.3,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        baseRadius: Math.min(width, height) * 0.45,
        radius: Math.min(width, height) * 0.45,
        color: isDark ? "rgba(16, 185, 129, 0.22)" : "rgba(16, 185, 129, 0.08)", // Emerald
      },
      {
        x: width * 0.75,
        y: height * 0.2,
        targetX: width * 0.75,
        targetY: height * 0.2,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        baseRadius: Math.min(width, height) * 0.4,
        radius: Math.min(width, height) * 0.4,
        color: isDark ? "rgba(20, 184, 166, 0.2)" : "rgba(20, 184, 166, 0.08)", // Teal
      },
      {
        x: width * 0.5,
        y: height * 0.7,
        targetX: width * 0.5,
        targetY: height * 0.7,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        baseRadius: Math.min(width, height) * 0.5,
        radius: Math.min(width, height) * 0.5,
        color: isDark ? "rgba(245, 158, 11, 0.15)" : "rgba(245, 158, 11, 0.06)", // Gold
      },
      {
        x: width * 0.8,
        y: height * 0.8,
        targetX: width * 0.8,
        targetY: height * 0.8,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        baseRadius: Math.min(width, height) * 0.35,
        radius: Math.min(width, height) * 0.35,
        color: isDark ? "rgba(4, 120, 87, 0.18)" : "rgba(4, 120, 87, 0.06)", // Deep Emerald
      },
    ];

    // Dedicated interactive cursor-following glow blob (Emerald/Teal light)
    const cursorBlob = {
      x: width / 2,
      y: height / 2,
      radius: Math.min(width, height) * 0.26,
      color: isDark ? "rgba(20, 184, 166, 0.26)" : "rgba(20, 184, 166, 0.12)", // Teal/Emerald light
    };

    // Initialize subtle background stars
    const starsCount = 120;
    const stars: StarConfig[] = [];
    for (let i = 0; i < starsCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 0.8 + Math.random() * 1.2,
        opacity: 0.1 + Math.random() * 0.8,
        twinkleSpeed: 0.005 + Math.random() * 0.015,
        phase: Math.random() * Math.PI * 2,
        depth: 0.1 + Math.random() * 0.9, // Parallax depth factor
      });
    }

    // Mouse Tracking
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Scroll tracking
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      // Re-scale blob base radii
      blobs.forEach((blob, idx) => {
        const factor = idx === 0 ? 0.45 : idx === 1 ? 0.4 : idx === 2 ? 0.5 : 0.35;
        blob.baseRadius = Math.min(width, height) * factor;
      });
      cursorBlob.radius = Math.min(width, height) * 0.26;
    };
    window.addEventListener("resize", handleResize);

    // Animation loop
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.002;
      ctx.clearRect(0, 0, width, height);

      // Scroll progress
      const docHeight = document.documentElement.scrollHeight || 1000;
      const winHeight = window.innerHeight;
      const maxScroll = docHeight - winHeight;
      const scrollPercent = maxScroll > 0 ? Math.min(1.0, Math.max(0.0, scrollY / maxScroll)) : 0;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // 1. Draw and Update Blobs (Aurora effect)
      blobs.forEach((blob, idx) => {
        // Define target coordinates based on scroll stages
        if (scrollPercent < 0.3) {
          // Top Scroll (Hero) - Spread out
          blob.targetX = idx === 0 ? width * 0.2 : idx === 1 ? width * 0.8 : idx === 2 ? width * 0.5 : width * 0.9;
          blob.targetY = idx === 0 ? height * 0.2 : idx === 1 ? height * 0.3 : idx === 2 ? height * 0.8 : height * 0.7;
        } else if (scrollPercent < 0.7) {
          // Mid Scroll (Skills/Experience) - Pulled closer to center, swirling
          const angleOffset = time * 2 + (idx * Math.PI) / 2;
          blob.targetX = width / 2 + Math.cos(angleOffset) * (width * 0.15);
          blob.targetY = height / 2 + Math.sin(angleOffset) * (height * 0.15);
        } else {
          // Bottom Scroll (Projects/Contact) - Move to corners
          blob.targetX = idx === 0 ? width * 0.8 : idx === 1 ? width * 0.2 : idx === 2 ? width * 0.1 : width * 0.9;
          blob.targetY = idx === 0 ? height * 0.8 : idx === 1 ? height * 0.7 : idx === 2 ? height * 0.2 : height * 0.1;
        }

        // Slowly interpolate positions
        blob.x += (blob.targetX - blob.x) * 0.02;
        blob.y += (blob.targetY - blob.y) * 0.02;

        // Apply slight float drift velocity
        blob.x += Math.sin(time + idx) * 0.15;
        blob.y += Math.cos(time + idx) * 0.15;

        // Apply interactive mouse gravity/pull
        const dx = mouse.x - blob.x;
        const dy = mouse.y - blob.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 400) {
          const force = (400 - dist) / 400;
          blob.x += dx * force * 0.02;
          blob.y += dy * force * 0.02;
        }

        // Pulse blob size slightly
        blob.radius = blob.baseRadius * (1.0 + Math.sin(time * 3 + idx) * 0.05);

        // Draw radial gradient blob
        const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
        grad.addColorStop(0, blob.color);
        grad.addColorStop(0.5, blob.color.replace(/[\d.]+\)$/, `${parseFloat(blob.color.match(/[\d.]+\)$/)?.[0] ?? "0") * 0.5})`));
        grad.addColorStop(1, "rgba(3, 5, 4, 0)");
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw and Update cursor-following interactive blob
      // It follows the mouse with a slight fluid latency (lerp 0.06)
      cursorBlob.x += (mouse.x - cursorBlob.x) * 0.06;
      cursorBlob.y += (mouse.y - cursorBlob.y) * 0.06;

      const cursorGrad = ctx.createRadialGradient(
        cursorBlob.x, 
        cursorBlob.y, 
        0, 
        cursorBlob.x, 
        cursorBlob.y, 
        cursorBlob.radius
      );
      cursorGrad.addColorStop(0, cursorBlob.color);
      cursorGrad.addColorStop(0.5, cursorBlob.color.replace(/[\d.]+\)$/, `${parseFloat(cursorBlob.color.match(/[\d.]+\)$/)?.[0] ?? "0") * 0.4})`));
      cursorGrad.addColorStop(1, "rgba(3, 5, 4, 0)");

      ctx.fillStyle = cursorGrad;
      ctx.beginPath();
      ctx.arc(cursorBlob.x, cursorBlob.y, cursorBlob.radius, 0, Math.PI * 2);
      ctx.fill();

      // 3. Draw and Update Parallax Twinkling Stars
      stars.forEach((star) => {
        // Parallax vertical movement based on scrollY
        const starY = (star.y - scrollY * star.depth * 0.35 + height * 100) % height;
        
        // Slight horizontal push from mouse movement
        const mouseOffset = ((mouse.x - width / 2) / (width / 2)) * 10 * star.depth;
        const starX = (star.x + mouseOffset + width) % width;

        // Twinkle stars opacity
        star.phase += star.twinkleSpeed;
        
        // React to cursor closeness: stars near the cursor blob glow brighter
        const dx = mouse.x - starX;
        const dy = mouse.y - starY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let glowBoost = 1.0;
        if (dist < 200) {
          glowBoost = 1.0 + (200 - dist) / 200 * 1.5; // boost opacity by up to 150% near cursor
        }

        const currentOpacity = Math.min(1.0, Math.max(0.05, star.opacity * (0.4 + Math.sin(star.phase) * 0.6) * glowBoost));

        // Draw soft circular star
        ctx.fillStyle = isDark 
          ? `rgba(255, 255, 255, ${currentOpacity})`
          : `rgba(4, 120, 87, ${currentOpacity * 0.4})`; // soft green stars in light mode
        ctx.beginPath();
        ctx.arc(starX, starY, star.size * (glowBoost > 1 ? 1.2 : 1.0), 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [isDark]);

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          filter: "blur(70px) saturate(160%)", // Merges the blobs and cursor glow into a liquid fluid mesh
        }}
      />
    </div>
  );
};

export default CreativeBackground;
