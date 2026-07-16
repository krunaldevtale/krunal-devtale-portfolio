"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { ExperienceItem } from "@/data/experienceData";
import CreativeBackground from "@/components/CreativeBackground";
import { FiArrowLeft, FiCalendar, FiBriefcase, FiCheckCircle, FiAward } from "react-icons/fi";

interface ExperienceDetailClientProps {
  exp: ExperienceItem;
}

export default function ExperienceDetailClient({ exp }: ExperienceDetailClientProps) {
  const { isDark } = useTheme();

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden font-primary">
      {/* Global fixed 3D space background */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
        <CreativeBackground />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16 relative z-10">
        {/* Back Button */}
        <Link
          href="/#experience"
          className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-white transition-colors mb-12 group cursor-pointer"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Hero Card Header */}
        <div
          className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-md mb-8
            ${
              isDark
                ? "bg-slate-950/40 border-white/10 text-white shadow-black/20"
                : "bg-white/40 border-black/10 text-gray-900 shadow-black/5"
            }`}
        >
          <span className="text-xs sm:text-sm font-mono text-blue-400 font-medium tracking-wider flex items-center gap-2">
            <FiCalendar className="text-sm" />
            {exp.duration}
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-medium mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            {exp.role}
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl font-heading text-slate-300 font-light mt-4 flex items-center gap-3">
            {exp.logo ? (
              <img 
                src={exp.logo} 
                alt={`${exp.company} Logo`} 
                className="w-8 h-8 rounded-lg object-cover border border-white/10 shrink-0 shadow-sm" 
              />
            ) : (
              <FiBriefcase className="text-blue-500 shrink-0" />
            )}
            <span>{exp.company}</span>
          </h2>

          {/* Tech tags */}
          <div className="mt-6 flex flex-wrap gap-2 pt-6 border-t border-white/5">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className="text-[11px] sm:text-xs font-mono px-3 py-1 rounded-md border border-white/5 bg-white/5 text-slate-300"
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
            className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-md
              ${
                isDark
                  ? "bg-slate-950/40 border-white/10 text-white shadow-black/20"
                  : "bg-white/40 border-black/10 text-gray-900 shadow-black/5"
              }`}
          >
            <h3 className="text-lg sm:text-xl font-heading font-medium mb-4 text-blue-400">About The Role</h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 font-light">
              {exp.detailedDescription}
            </p>
          </div>

          {/* Responsibilities */}
          <div
            className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-md
              ${
                isDark
                  ? "bg-slate-950/40 border-white/10 text-white shadow-black/20"
                  : "bg-white/40 border-black/10 text-gray-900 shadow-black/5"
              }`}
          >
            <h3 className="text-lg sm:text-xl font-heading font-medium mb-6 text-purple-400">Key Responsibilities</h3>
            <ul className="flex flex-col gap-4">
              {exp.responsibilities.map((resp, index) => (
                <li key={index} className="flex gap-3 text-sm sm:text-base leading-relaxed text-slate-300 font-light">
                  <FiCheckCircle className="text-blue-400 mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Accomplishments */}
          <div
            className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-md
              ${
                isDark
                  ? "bg-slate-950/40 border-white/10 text-white shadow-black/20"
                  : "bg-white/40 border-black/10 text-gray-900 shadow-black/5"
              }`}
          >
            <h3 className="text-lg sm:text-xl font-heading font-medium mb-6 text-pink-400">Key Accomplishments</h3>
            <ul className="flex flex-col gap-4">
              {exp.accomplishments.map((accomp, index) => (
                <li key={index} className="flex gap-3 text-sm sm:text-base leading-relaxed text-slate-300 font-light">
                  <FiAward className="text-pink-400 mt-1 flex-shrink-0 text-sm sm:text-base" />
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
