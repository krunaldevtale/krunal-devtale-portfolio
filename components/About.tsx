"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About: React.FC = () => {
  const { isDark } = useTheme();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      id="about-me"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-20 relative z-10 overflow-hidden"
    >
      {/* Simple Classy Card Container with soft scroll transition */}
      <div
        className={`w-full max-w-3xl relative z-10 transition-all duration-1000 ease-out transform-gpu
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-16 scale-95"
          }`}
      >
        {/* Main Simple Glass Box */}
        <div
          className={`relative px-8 py-10 sm:px-12 sm:py-12 rounded-2xl border backdrop-blur-md shadow-xl
            ${
              isDark
                ? "bg-slate-950/40 border-white/10 text-white shadow-black/20"
                : "bg-white/40 border-black/10 text-gray-900 shadow-black/5"
            }`}
        >
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-medium tracking-tight">
              {/* About Me */}
            </h2>
            <div className="w-12 h-[2px] bg-blue-500 mx-auto mt-3 rounded-full" />
          </div>

          {/* Bio Content - Left aligned for readability */}
          <div className="flex flex-col gap-6 text-sm sm:text-base md:text-lg leading-relaxed font-primary font-light text-slate-300">
            <p>
              Hi, I'm{" "}
              <span className="font-semibold text-white">LILADHAR</span>, a
              Full Stack Software Engineer dedicated to designing and building
              robust, scalable, end-to-end digital products. I specialize in bridging
              the gap between complex backend systems and clean, intuitive user
              interfaces to create cohesive, high-performance web systems.
            </p>
            <p>
              My technical expertise spans modern frontend frameworks like React and Next.js, 
              scalable server-side architectures using Node.js and NestJS, and structured 
              database designs utilizing both SQL and NoSQL databases. I design systems with
              modularity and optimization in mind, ensuring codebases remain maintainable
              and operations scale efficiently as user traffic expands.
            </p>
            <p>
              I approach development with an analytical, first-principles mindset, focused on 
              delivering clean, clean architectures that solve actual business challenges. I'm 
              passionate about technical optimization, continuous learning, and crafting premium 
              digital solutions that create tangible real-world value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
