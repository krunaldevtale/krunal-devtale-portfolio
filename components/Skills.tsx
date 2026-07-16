"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { getSkillGroups } from "@/data/skillsData";

const Skills: React.FC = () => {
  const { isDark } = useTheme();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const skillGroups = getSkillGroups(isDark);

  return (
    <section
      id="skills"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-20 relative z-10 overflow-hidden"
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
          {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-medium tracking-tight">
            My Skills
          </h2> */}
          <div className="w-12 h-[2px] bg-blue-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* MERN Highlight Banner
        <div
          className={`mb-12 p-6 sm:p-8 rounded-2xl border backdrop-blur-md text-center shadow-lg
            ${
              isDark
                ? "bg-slate-950/40 border-white/10 text-white shadow-black/20"
                : "bg-white/40 border-black/10 text-gray-900 shadow-black/5"
            }`}
        >
          <h3 className="text-lg sm:text-xl font-heading font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Core Full-Stack Stack (MERN / Next.js)
          </h3>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            <div className="flex flex-col items-center">
              <SiMongodb className="text-3xl sm:text-4xl text-[#47A248] transform hover:scale-110 transition-transform" />
              <span className="mt-2 text-xs sm:text-sm font-mono text-slate-400">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <SiExpress className={`text-3xl sm:text-4xl transform hover:scale-110 transition-transform ${isDark ? "text-white" : "text-gray-800"}`} />
              <span className="mt-2 text-xs sm:text-sm font-mono text-slate-400">Express</span>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-3xl sm:text-4xl text-[#61DAFB] transform hover:scale-110 transition-transform animate-[spin_10s_linear_infinite]" />
              <span className="mt-2 text-xs sm:text-sm font-mono text-slate-400">React</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-3xl sm:text-4xl text-[#339933] transform hover:scale-110 transition-transform" />
              <span className="mt-2 text-xs sm:text-sm font-mono text-slate-400">Node.js</span>
            </div>
          </div>
        </div>
        */}

        {/* Skill Groups Grid */}
        <div className="flex flex-col gap-10">
          {skillGroups.map((group, groupIdx) => (
            <div key={groupIdx}>
              <h3 className="text-lg sm:text-xl font-heading font-medium mb-4 text-slate-300">
                {group.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {group.skills.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className={`flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl border backdrop-blur-md
                              transition-all duration-300 hover:scale-105 hover:border-white/20
                      ${
                        isDark
                          ? "bg-slate-950/40 border-white/10 text-white shadow-black/10"
                          : "bg-white/40 border-black/10 text-gray-900 shadow-black/5"
                      }`}
                  >
                    <div className="text-3xl sm:text-4xl mb-3 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <p className="text-xs sm:text-sm font-medium tracking-wide text-slate-300 text-center font-primary">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI Footnote Quote */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm font-mono text-slate-400 italic max-w-xl mx-auto leading-relaxed">
            Yes, I use AI, and &ldquo;I'm not married to AI. We just have a very productive relationship.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
