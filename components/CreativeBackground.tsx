"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

const CreativeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;
    
    // Ensure initial width/height are non-zero
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);
    camera.position.set(0, 10, 26);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x3b82f6, 2.0); // Blue light
    dirLight1.position.set(10, 20, 15);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xec4899, 1.5); // Pink light
    dirLight2.position.set(-10, -10, -5);
    scene.add(dirLight2);

    // 1. 3D Floating Wireframe Objects (Placed offset on sides so they don't cover text)
    const floatGroup = new THREE.Group();
    scene.add(floatGroup);

    // Right Float: 3D Holographic Icosahedron
    const icoGeom = new THREE.IcosahedronGeometry(2.5, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x3b82f6, // Neon Blue
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const icosahedron = new THREE.Mesh(icoGeom, icoMat);
    icosahedron.position.set(12, 3, -2);
    floatGroup.add(icosahedron);

    // Left Float: 3D Holographic Dodecahedron
    const dodecaGeom = new THREE.DodecahedronGeometry(1.8, 0);
    const dodecaMat = new THREE.MeshBasicMaterial({
      color: 0xec4899, // Neon Pink/Magenta
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const dodecahedron = new THREE.Mesh(dodecaGeom, dodecaMat);
    dodecahedron.position.set(-12, -3, 0);
    floatGroup.add(dodecahedron);

    // 2. 3D Glowing Particle Wave Field (Tron style wavy grid)
    const waveCountX = 75;
    const waveCountY = 75;
    const waveParticles = waveCountX * waveCountY;
    
    const waveGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(waveParticles * 3);
    const colors = new Float32Array(waveParticles * 3);

    const color1 = new THREE.Color("#3b82f6"); // Blue
    const color2 = new THREE.Color("#ec4899"); // Pink

    let idx = 0;
    const spacing = 0.65;
    const waveWidth = waveCountX * spacing;
    const waveDepth = waveCountY * spacing;

    for (let x = 0; x < waveCountX; x++) {
      for (let y = 0; y < waveCountY; y++) {
        // Center the wave grid
        const posX = x * spacing - waveWidth / 2;
        const posZ = y * spacing - waveDepth / 2;

        positions[idx * 3] = posX;
        positions[idx * 3 + 1] = 0; // Height will be animated in render loop
        positions[idx * 3 + 2] = posZ;

        // Color gradient across the wave field
        const mixedColor = color1.clone().lerp(color2, x / waveCountX);
        colors[idx * 3] = mixedColor.r;
        colors[idx * 3 + 1] = mixedColor.g;
        colors[idx * 3 + 2] = mixedColor.b;

        idx++;
      }
    }

    waveGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    waveGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const waveMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: true,
    });

    const waveField = new THREE.Points(waveGeom, waveMat);
    waveField.position.y = -6; // Lower the field to act as ground
    scene.add(waveField);

    // 3. Background Starfield
    const starsCount = 1000;
    const starsGeom = new THREE.BufferGeometry();
    const starsPos = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i++) {
      starsPos[i] = (Math.random() - 0.5) * 120;
    }
    starsGeom.setAttribute("position", new THREE.BufferAttribute(starsPos, 3));

    const starsMat = new THREE.PointsMaterial({
      size: 0.08,
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });
    const starfield = new THREE.Points(starsGeom, starsMat);
    scene.add(starfield);

    // Mouse Tracking
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX - window.innerWidth / 2) / 100;
      mouse.targetY = (e.clientY - window.innerHeight / 2) / 100;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Scroll Tracking for 3D Camera Transitions
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      const w = container.offsetWidth || window.innerWidth;
      const h = container.offsetHeight || window.innerHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationId: number;
    let time = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      time += delta * 0.8; // Control speed of waves

      // Determine viewport height for scrolling calculations
      const viewHeight = window.innerHeight || 800;
      // Scroll percentage from 0 (top) to 1.2 (scrolled past first screen)
      const scrollPercent = Math.min(1.2, scrollY / viewHeight);

      // Camera scroll targets (camera dips down and zooms in slightly on scroll)
      const targetCamY = 10 - scrollPercent * 14; 
      const targetCamZ = 26 - scrollPercent * 6;
      const targetLookAtY = -1 - scrollPercent * 2;

      // 1. Rotate the side 3D shapes (speeds up as you scroll!)
      const rotateSpeedFactor = 1 + scrollPercent * 2.5;
      icosahedron.rotation.x += 0.005 * rotateSpeedFactor;
      icosahedron.rotation.y += 0.008 * rotateSpeedFactor;
      dodecahedron.rotation.x -= 0.004 * rotateSpeedFactor;
      dodecahedron.rotation.y += 0.006 * rotateSpeedFactor;

      // Pull floating shapes slightly closer/inward on scroll
      icosahedron.position.x = 12 - scrollPercent * 4;
      dodecahedron.position.x = -12 + scrollPercent * 4;

      // 2. Animate the Particle Wave heights (creating undulating waves)
      const positionsAttr = waveGeom.attributes.position.array as Float32Array;
      let particleIdx = 0;

      for (let x = 0; x < waveCountX; x++) {
        for (let y = 0; y < waveCountY; y++) {
          // Double sine wave equation based on grid position and time
          const waveHeight = 
            Math.sin(x * 0.18 + time) * 1.8 + 
            Math.cos(y * 0.18 + time) * 1.8;

          positionsAttr[particleIdx * 3 + 1] = waveHeight;
          particleIdx++;
        }
      }
      waveGeom.attributes.position.needsUpdate = true;

      // 3. Slowly rotate the background starfield
      starfield.rotation.y += 0.0002;

      // 4. Smooth Camera Parallax from Mouse + Scroll position
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      camera.position.x += (mouse.x - camera.position.x) * 0.05;
      camera.position.y += (targetCamY + (-mouse.y) * 0.05 - camera.position.y) * 0.05;
      camera.position.z += (targetCamZ - camera.position.z) * 0.05;
      camera.lookAt(new THREE.Vector3(0, targetLookAtY, 0));

      renderer.render(scene, camera);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      icoGeom.dispose();
      icoMat.dispose();
      dodecaGeom.dispose();
      dodecaMat.dispose();
      waveGeom.dispose();
      waveMat.dispose();
      starsGeom.dispose();
      starsMat.dispose();
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
        }}
      />
      {/* Subtle overlay grid lines */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-8"
        style={{
          backgroundImage: isDark
            ? "radial-gradient(rgba(255, 255, 255, 0.08) 1.2px, transparent 1.2px)"
            : "radial-gradient(rgba(15, 23, 42, 0.08) 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 75%)",
        }}
      />
    </div>
  );
};

export default CreativeBackground;
