"use client";

import React, { useState, useEffect } from "react";
import { FiDownload, FiSend, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { resumeInfo } from "@/data/resumeData";

const Hero: React.FC = () => {
  const { isDark } = useTheme();
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 });
  const [typedText, setTypedText] = useState("");
  
  const terminalCode = `const developer = {
  name: "Krunal Devtale",
  role: "Full Stack Developer",
  location: "Pune, India",
  skills: [
    "React.js", "JavaScript", "TypeScript",
    "Node.js", "Express.js", "MongoDB"
  ],
  passion: "Sleek interfaces & scalable APIs",
  status: "Open to opportunities"
};`;

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const tick = () => {
      const fullText = terminalCode;
      
      if (!isDeleting) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        
        if (index >= fullText.length) {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            tick();
          }, 4000); // hold typed state for 4s
        } else {
          // Variable human-like typing speed
          const char = fullText.charAt(index);
          let delay = 40 + Math.random() * 35; // base speed 40ms to 75ms
          if (char === "\n") delay = 180;      // pause at newlines
          if (char === "," || char === ";") delay = 120; // pause at punctuation
          
          timeoutId = setTimeout(tick, delay);
        }
      } else {
        setTypedText(fullText.slice(0, index - 1));
        index--;
        
        if (index <= 0) {
          isDeleting = false;
          timeoutId = setTimeout(tick, 1000); // hold empty state for 1s
        } else {
          timeoutId = setTimeout(tick, 8); // faster backspacing
        }
      }
    };

    timeoutId = setTimeout(tick, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleDownloadResume = () => {
    window.open(resumeInfo.filePath, "_blank");
    const link = document.createElement("a");
    link.href = resumeInfo.filePath;
    link.download = resumeInfo.downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleConnectClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className={`${
        isDark ? "text-white" : "text-gray-900"
      } min-h-screen flex items-center px-4 sm:px-8 md:px-16 lg:px-24 py-20 relative`}
      style={{
        background: "transparent",
        zIndex: 10,
        position: "relative",
      }}
    >
      <div 
        ref={heroRef as React.RefObject<HTMLDivElement>}
        className="max-w-6xl mx-auto w-full relative z-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bio & Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Hi there badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-300 text-xs sm:text-sm font-mono mb-6 transition-all duration-700 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Full-Time Opportunities</span>
            </div>

            {/* Title */}
            <h1 className={`font-heading leading-tight transition-all duration-700 delay-100 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <span className="text-xl sm:text-2xl font-light text-slate-400 block mb-1">Hi there, I'm</span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 animate-gradient">
                  Krunal Devtale
                </span>
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-300 block mt-2">
                Full Stack Software Engineer
              </span>
            </h1>

            {/* Pitch */}
            <p className={`text-base sm:text-lg text-slate-400 leading-relaxed font-primary font-light mt-6 max-w-xl transition-all duration-700 delay-200 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              I specialize in crafting responsive, scalable, and beautifully designed web systems. 
              Bridging robust backend engineering with immersive frontend user experiences.
            </p>

            {/* CTAs */}
            <div className={`mt-8 flex flex-wrap gap-4 items-center transition-all duration-700 delay-300 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <button
                onClick={handleConnectClick}
                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 text-white 
                         rounded-full px-7 py-3.5 btn-smooth text-sm sm:text-base font-heading font-medium
                         hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2 cursor-pointer"
              >
                Let's Talk
                <FiSend className="icon-bounce text-sm" />
              </button>
              
              <button
                onClick={handleDownloadResume}
                className="group border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-slate-200 
                         rounded-full px-7 py-3.5 btn-smooth text-sm sm:text-base font-heading font-medium
                         hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                Download Resume
                <FiDownload className="icon-bounce text-sm" />
              </button>
            </div>

            {/* Social Links */}
            <div className={`mt-8 flex items-center gap-4 transition-all duration-700 delay-400 ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
              <a
                href="https://github.com/KrunalDevtale"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.05)] cursor-pointer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/krunal-devtale/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.05)] cursor-pointer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://x.com/KrunalDevtale"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.05)] cursor-pointer"
                aria-label="Twitter"
              >
                <FiTwitter />
              </a>
            </div>

          </div>

          {/* Right Column: Code Console Mockup */}
          <div className={`lg:col-span-5 hidden lg:block transition-all duration-1000 delay-200 ${
            heroVisible ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-8"
          }`}>
            <div className="relative">
              {/* Decorative background glow behind terminal */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 opacity-20 blur-xl"></div>
              
              {/* Terminal Box */}
              <div className="relative bg-[#0d0e15]/85 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-rose-500/80"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="text-xs font-mono text-slate-500">developer.ts — bash</div>
                  <div className="w-10"></div>
                </div>
                {/* Content */}
                <div className="p-6 font-mono text-sm leading-relaxed text-left min-h-[260px] select-none">
                  <pre className="text-emerald-400 m-0">
                    <code>
                      {typedText}
                      <span className="animate-pulse bg-emerald-400 text-transparent ml-0.5 px-[3px]">|</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
