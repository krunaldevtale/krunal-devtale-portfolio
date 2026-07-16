"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BiBriefcase } from "react-icons/bi";
import { experiences } from "@/data/experienceData";

const Experience: React.FC = () => {
  const { isDark } = useTheme();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      id="experience"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-20 relative z-10 overflow-hidden"
    >
      <div
        className={`w-full max-w-3xl relative z-10 transition-all duration-1000 ease-out transform-gpu
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-16 scale-95"
          }`}
      >
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-medium tracking-tight">
            {/* Work Experience */}
          </h2>
          <div className="w-12 h-[2px] bg-blue-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-white/10 dark:border-white/5 ml-4 sm:ml-6 flex flex-col gap-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-10">
              {/* Timeline marker node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border border-blue-500/20 bg-slate-900 flex items-center justify-center text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.15)] overflow-hidden">
                {exp.logo ? (
                  <img src={exp.logo} alt={`${exp.company} Logo`} className="w-full h-full object-cover" />
                ) : (
                  <BiBriefcase className="text-sm" />
                )}
              </div>

              {/* Experience Card */}
              <Link
                href={`/experience/${exp.id}`}
                className={`group block p-6 sm:p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:scale-[1.01] hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]
                  ${
                    isDark
                      ? "bg-slate-950/40 border-white/10 text-white shadow-black/20"
                      : "bg-white/40 border-black/10 text-gray-900 shadow-black/5"
                  }`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs sm:text-sm font-mono text-blue-400 font-medium tracking-wider">
                    {exp.duration}
                  </span>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-blue-400 transition-colors">
                    Read details &rarr;
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-heading font-medium mt-2 group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                
                <h4 className="text-sm sm:text-base font-primary text-gray-400 mt-1">
                  {exp.company}
                </h4>

                <p className="mt-4 text-sm sm:text-base leading-relaxed font-primary font-light text-slate-300">
                  {exp.description}
                </p>

                {/* Tech tags list */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-md border border-white/5 bg-white/5 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
