"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { BiBriefcase } from "react-icons/bi";
import { experiences, ExperienceItem } from "@/data/experienceData";

interface ExperienceCardProps {
  exp: ExperienceItem;
  isDark: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, isDark }) => {
  const cardRef = useMouseGlow<HTMLAnchorElement>();

  return (
    <Link
      ref={cardRef}
      href={`/experience/${exp.id}`}
      className="bento-card glow-card block p-6 sm:p-8 hover:scale-[1.01] text-left"
    >
      <div className="flex justify-between items-start flex-wrap gap-2">
        <span className="text-xs sm:text-sm font-mono text-emerald-400 font-medium tracking-wider">
          {exp.duration}
        </span>
        <span className="text-xs font-mono text-slate-500 group-hover:text-emerald-400 transition-colors">
          Read details &rarr;
        </span>
      </div>
      
      <h3 className="text-lg sm:text-xl font-heading font-semibold mt-3 text-slate-200 group-hover:text-emerald-400 transition-colors">
        {exp.role}
      </h3>
      
      <h4 className="text-sm sm:text-base font-primary text-slate-400 mt-1">
        {exp.company}
      </h4>

      <p className="mt-4 text-sm sm:text-base leading-relaxed font-primary font-light text-slate-300">
        {exp.description}
      </p>

      {/* Tech tags list */}
      <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/5">
        {exp.skills.map((skill) => (
          <span
            key={skill}
            className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-md border border-white/5 bg-white/5 text-slate-300 hover:bg-white/10 hover:border-white/10 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </Link>
  );
};

const Experience: React.FC = () => {
  const { isDark } = useTheme();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      id="experience"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-24 relative z-10 overflow-hidden"
    >
      <div
        className={`w-full max-w-4xl relative z-10 transition-all duration-1000 ease-out transform-gpu
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-16 scale-95"
          }`}
      >
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight section-heading-gradient">
            Experience
          </h2>
          <div className="section-accent-gradient" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l-2 border-dashed border-emerald-500/20 ml-4 sm:ml-8 flex flex-col gap-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-12">
              {/* Timeline marker node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border border-emerald-500/30 bg-[#0d0e15] flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] overflow-hidden transition-all duration-300 hover:scale-110 hover:border-emerald-400 hover:text-white">
                {exp.logo ? (
                  <img src={exp.logo} alt={`${exp.company} Logo`} className="w-full h-full object-cover" />
                ) : (
                  <BiBriefcase className="text-sm" />
                )}
              </div>

              {/* Mapped custom card component to isolate hooks */}
              <ExperienceCard exp={exp} isDark={isDark} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
