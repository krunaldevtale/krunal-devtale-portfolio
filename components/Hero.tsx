"use client";

import React from "react";
import { FiDownload, FiSend, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { resumeInfo } from "@/data/resumeData";

const Hero: React.FC = () => {
  const { isDark } = useTheme();
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.3 });

  const handleDownloadResume = () => {
    // Open in a new tab for immediate viewing
    window.open(resumeInfo.filePath, "_blank");

    // Trigger local download
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
    <div
      className={`${
        isDark ? "text-white" : "text-gray-900"
      } min-h-screen flex items-center px-4 sm:px-8 md:px-16 lg:px-24 py-12 sm:py-16 relative`}
      id="home"
      style={{
        background: isDark ? "transparent" : "#ffffff",
        zIndex: 10,
        position: "relative",
      }}
    >
      <div className="max-w-4xl mx-auto w-full relative z-20">
        <div className="flex flex-col items-center">
          {/* Main H1 Title with original stacked design and gradients */}
          <div 
            ref={heroRef as React.RefObject<HTMLDivElement>}
            className={`text-center mt-6 sm:mt-10 mb-4 transition-all duration-700 ${
              heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-12'
            }`}
          >
            <h1 className="font-heading font-medium leading-tight">
              {/* Hi there 👋🏽 */}
              <div className="mb-2 sm:mb-3">
                <span className="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-gradient">
                  Hi there
                </span>
                <span className="inline-block animate-waving-hand ml-2 text-xl sm:text-2xl md:text-3xl">👋🏽</span>
              </div>

              {/* I'm Liladhar Ithole */}
              <div className="mb-3">
                <span className="block text-base sm:text-lg md:text-xl font-primary text-gray-400 mb-1">I'm</span>
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
                  Liladhar
                </span>
              </div>

              {/* Full Stack Software Engineer (Solid classy color) */}
              <div className="text-lg sm:text-xl md:text-2xl font-primary font-medium mt-4">
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Full Stack Software Engineer
                </span>
              </div>
            </h1>
          </div>

          <p
            className={`text-sm sm:text-base md:text-lg text-center transition-all duration-1000 delay-300 ${
              isDark ? "text-gray-400" : "text-gray-600"
            } ${heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'} max-w-xl mx-auto px-4 mt-4 leading-relaxed font-light`}
          >
            I am a Full Stack Software Engineer with expertise in building responsive,
            scalable, and dynamic web applications.
          </p>

          <div className={`mt-8 sm:mt-10 flex justify-center items-center transition-all duration-1000 delay-500 ${
            heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={handleDownloadResume}
              className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white 
                       rounded-full px-6 py-3 sm:px-7 sm:py-3.5 btn-smooth
                       text-sm sm:text-base font-heading font-medium
                       flex items-center justify-center gap-2
                       hover:scale-105 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] cursor-pointer"
            >
              Resume
              <FiDownload className="icon-bounce text-sm" />
            </button>
          </div>

          {/* Social Icons */}
          <div className={`mt-6 flex justify-center items-center gap-4 transition-all duration-1000 delay-700 ${
            heroVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            <a
              href="https://github.com/Liladharithole"
              target="_blank"
              rel="noreferrer"
              className={`w-10 h-10 rounded-full border flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 cursor-pointer
                ${
                  isDark
                    ? "border-white/10 bg-white/5 hover:bg-white/10 text-white hover:border-white/20 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    : "border-black/10 bg-black/5 hover:bg-black/10 text-gray-800 hover:border-black/20 hover:shadow-[0_0_10px_rgba(0,0,0,0.05)]"
                }`}
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/liladhar-ithole/"
              target="_blank"
              rel="noreferrer"
              className={`w-10 h-10 rounded-full border flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 cursor-pointer
                ${
                  isDark
                    ? "border-white/10 bg-white/5 hover:bg-white/10 text-white hover:border-white/20 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    : "border-black/10 bg-black/5 hover:bg-black/10 text-gray-800 hover:border-black/20 hover:shadow-[0_0_10px_rgba(0,0,0,0.05)]"
                }`}
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
             <a
              href="https://x.com/Liladharrrrr"
              target="_blank"
              rel="noreferrer"
              className={`w-10 h-10 rounded-full border flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 cursor-pointer
                ${
                  isDark
                    ? "border-white/10 bg-white/5 hover:bg-white/10 text-white hover:border-white/20 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    : "border-black/10 bg-black/5 hover:bg-black/10 text-gray-800 hover:border-black/20 hover:shadow-[0_0_10px_rgba(0,0,0,0.05)]"
                }`}
              aria-label="Twitter"
            >
              <FiTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
