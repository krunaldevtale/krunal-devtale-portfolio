"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { FiCode, FiCpu, FiDatabase, FiCompass } from "react-icons/fi";

const About: React.FC = () => {
  const { isDark } = useTheme();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.15 });

  // Mouse spotlight glow refs
  const cardRef1 = useMouseGlow<HTMLDivElement>();
  const cardRef2 = useMouseGlow<HTMLDivElement>();
  const cardRef3 = useMouseGlow<HTMLDivElement>();
  const cardRef4 = useMouseGlow<HTMLDivElement>();

  return (
    <section
      id="about-me"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-24 relative z-10 overflow-hidden"
    >
      <div
        className={`w-full max-w-5xl relative z-10 transition-all duration-1000 ease-out transform-gpu
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-16 scale-95"
          }`}
      >
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight section-heading-gradient">
            About Me
          </h2>
          <div className="section-accent-gradient" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Detailed Bio (2 cols) */}
          <div
            ref={cardRef1}
            className="bento-card glow-card md:col-span-2 p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FiCompass className="text-emerald-400 text-2xl" />
                <h3 className="text-xl font-heading font-semibold text-slate-200">My Journey</h3>
              </div>
              <div className="space-y-4 text-slate-300 leading-relaxed font-primary font-light text-sm sm:text-base">
                <p>
                  Hi, I'm <span className="font-semibold text-white">Krunal Devtale</span>, a 
                  Full Stack Software Engineer committed to building premium, scalable, and optimized digital architectures. 
                  I focus on bridging complex database pipelines and backend systems with high-fidelity, interactive frontends.
                </p>
                <p>
                  My engineering philosophy centers around first-principles problem-solving. I prioritize modular designs, 
                  strict type systems, and performant server configurations to ensure that application performance remains 
                  responsive under load.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/5 flex gap-6 text-xs font-mono text-emerald-300">
              <span>// Clean code advocate</span>
              <span>// Continuous learner</span>
            </div>
          </div>

          {/* Card 2: Quick Specs (1 col) */}
          <div
            ref={cardRef2}
            className="bento-card glow-card p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FiCpu className="text-purple-400 text-2xl" />
                <h3 className="text-xl font-heading font-semibold text-slate-200">Quick Stats</h3>
              </div>
              <ul className="space-y-4 font-mono text-sm text-slate-300">
                <li className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-500">EXPERIENCE</span>
                  <span className="text-white text-right">2+ Years</span>
                </li>
                <li className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-500">LOCATION</span>
                  <span className="text-white text-right">Pune, India</span>
                </li>
                <li className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-slate-500">AVAILABILITY</span>
                  <span className="text-emerald-400 text-right">Freelance / Full-Time</span>
                </li>
                <li className="flex justify-between py-2">
                  <span className="text-slate-500">MAIN STACK</span>
                  <span className="text-white text-right">Node & React</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Technical Pillars (1 col) */}
          <div
            ref={cardRef3}
            className="bento-card glow-card p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FiDatabase className="text-emerald-400 text-2xl" />
                <h3 className="text-xl font-heading font-semibold text-slate-200">Pillars</h3>
              </div>
              <ul className="space-y-4 text-sm text-slate-300 font-light leading-relaxed">
                <li>
                  <strong className="text-white block font-heading font-medium">Robust Scalability</strong>
                  Designing systems that grow horizontally without scaling up complexity.
                </li>
                <li>
                  <strong className="text-white block font-heading font-medium">Relational Efficiency</strong>
                  Creating optimized indexing, caching layers, and database queries.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4: Dev Manifesto (2 cols) */}
          <div
            ref={cardRef4}
            className="bento-card glow-card md:col-span-2 p-8 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FiCode className="text-emerald-400 text-2xl" />
                <h3 className="text-xl font-heading font-semibold text-slate-200">Engineering Manifesto</h3>
              </div>
              <p className="text-slate-300 font-primary font-light text-sm sm:text-base leading-relaxed">
                "I approach software development not just as a job of writing statements, but as a discipline of crafting systems. 
                Creating components that are modular, logic that is self-documenting, and interfaces that feel fluid and alive. 
                We write code for computers to execute, but first we write it for people to maintain."
              </p>
            </div>
            <div className="mt-6 pt-4 text-xs font-mono text-emerald-400 text-right">
              // Krunal Devtale
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
