"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { getSkillGroups } from "@/data/skillsData";

const Skills: React.FC = () => {
  const { isDark } = useTheme();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const skillGroups = getSkillGroups(isDark);

  // Mouse spotlight glow refs for each bento card group
  const cardRef0 = useMouseGlow<HTMLDivElement>();
  const cardRef1 = useMouseGlow<HTMLDivElement>();
  const cardRef2 = useMouseGlow<HTMLDivElement>();
  const cardRef3 = useMouseGlow<HTMLDivElement>();
  
  const cardRefs = [cardRef0, cardRef1, cardRef2, cardRef3];
  
  // Custom column layout mapping for bento styling
  const getColSpan = (index: number) => {
    switch (index) {
      case 0: return "col-span-12 lg:col-span-4";
      case 1: return "col-span-12 lg:col-span-8";
      case 2: return "col-span-12 lg:col-span-8";
      case 3: return "col-span-12 lg:col-span-4";
      default: return "col-span-12";
    }
  };

  return (
    <section
      id="skills"
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight section-heading-gradient">
            My Skills
          </h2>
          <div className="section-accent-gradient" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <div
              key={groupIdx}
              ref={cardRefs[groupIdx]}
              className={`bento-card glow-card ${getColSpan(groupIdx)} p-8 flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-lg sm:text-xl font-heading font-semibold text-slate-200 mb-6 border-b border-white/5 pb-3">
                  {group.title}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {group.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/10 hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-3xl sm:text-4xl mb-3 flex items-center justify-center filter drop-shadow-[0_0_8px_rgba(255,255,255,0.05)]">
                        {skill.icon}
                      </div>
                      <p className="text-xs font-mono font-medium tracking-wide text-slate-300 text-center">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote Quote */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm font-mono text-slate-500 italic max-w-xl mx-auto leading-relaxed">
            "Technological choice is always a balance of performance, maintainability, and developer experience."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
