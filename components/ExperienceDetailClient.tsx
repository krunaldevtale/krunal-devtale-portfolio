"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { ExperienceItem } from "@/data/experienceData";
import CreativeBackground from "@/components/CreativeBackground";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { FiArrowLeft, FiCalendar, FiBriefcase, FiCheckCircle, FiAward } from "react-icons/fi";

interface ExperienceDetailClientProps {
  exp: ExperienceItem;
}

export default function ExperienceDetailClient({ exp }: ExperienceDetailClientProps) {
  const { isDark } = useTheme();

  // Mouse spotlight glow refs for each detail section block
  const headerRef = useMouseGlow<HTMLDivElement>();
  const aboutRef = useMouseGlow<HTMLDivElement>();
  const respRef = useMouseGlow<HTMLDivElement>();
  const accompRef = useMouseGlow<HTMLDivElement>();

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden font-primary">
      {/* Global fixed 3D space background */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
        <CreativeBackground />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-20 relative z-10">
        {/* Back Button */}
        <Link
          href="/#experience"
          className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-white transition-colors mb-10 group cursor-pointer"
        >
          <FiArrowLeft className="group-hover:-translate-x-1.5 transition-transform duration-200" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Hero Card Header */}
        <div
          ref={headerRef}
          className="bento-card glow-card p-8 sm:p-10 mb-8 text-left"
        >
          <span className="text-xs sm:text-sm font-mono text-emerald-400 font-medium tracking-wider flex items-center gap-2">
            <FiCalendar className="text-sm" />
            {exp.duration}
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400">
            {exp.role}
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl font-heading text-slate-300 font-semibold mt-4 flex items-center gap-3">
            {exp.logo ? (
              <img 
                src={exp.logo} 
                alt={`${exp.company} Logo`} 
                className="w-9 h-9 rounded-lg object-cover border border-white/10 shrink-0 shadow-sm" 
              />
            ) : (
              <FiBriefcase className="text-emerald-400 shrink-0 text-xl" />
            )}
            <span>{exp.company}</span>
          </h2>

          {/* Tech tags */}
          <div className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-white/5">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className="text-[11px] sm:text-xs font-mono px-3 py-1 rounded-md border border-white/5 bg-white/5 text-slate-300 hover:bg-white/10 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Content body */}
        <div className="flex flex-col gap-8">
          {/* About Role */}
          <div
            ref={aboutRef}
            className="bento-card glow-card p-8 sm:p-10 text-left"
          >
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-4 text-emerald-400">About The Role</h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-light">
              {exp.detailedDescription}
            </p>
          </div>

          {/* Responsibilities */}
          <div
            ref={respRef}
            className="bento-card glow-card p-8 sm:p-10 text-left"
          >
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-6 text-teal-400">Key Responsibilities</h3>
            <ul className="flex flex-col gap-4">
              {exp.responsibilities.map((resp, index) => (
                <li key={index} className="flex gap-3 text-sm sm:text-base leading-relaxed text-slate-300 font-light">
                  <FiCheckCircle className="text-emerald-400 mt-1.5 flex-shrink-0 text-sm sm:text-base" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Accomplishments */}
          <div
            ref={accompRef}
            className="bento-card glow-card p-8 sm:p-10 text-left"
          >
            <h3 className="text-lg sm:text-xl font-heading font-semibold mb-6 text-emerald-400">Key Accomplishments</h3>
            <ul className="flex flex-col gap-4">
              {exp.accomplishments.map((accomp, index) => (
                <li key={index} className="flex gap-3 text-sm sm:text-base leading-relaxed text-slate-300 font-light">
                  <FiAward className="text-emerald-400 mt-1.5 flex-shrink-0 text-sm sm:text-base" />
                  <span>{accomp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
