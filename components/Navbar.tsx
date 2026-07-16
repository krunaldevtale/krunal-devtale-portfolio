"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { BiBookContent, BiBriefcase } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { useTheme } from "@/context/ThemeContext";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false);
    }
  };

  const navigateToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    {
      href: "#about-me",
      label: "About",
      icon: <AiOutlineUser className="text-base" />,
    },
    {
      href: "#experience",
      label: "Experience",
      icon: <BiBriefcase className="text-base" />,
    },
    {
      href: "#skills",
      label: "Skills",
      icon: <BiBookContent className="text-base" />,
    },
    {
      href: "#projects",
      label: "Projects",
      icon: <AiOutlineProject className="text-base" />,
    },
    {
      href: "#services",
      label: "Services",
      icon: <MdMiscellaneousServices className="text-base" />,
    },
  ];

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 transition-all duration-500 border overflow-hidden
      ${isMenuOpen ? "rounded-2xl" : "rounded-full"}
      ${
        isScrolled
          ? isDark
            ? "bg-[#040806]/70 border-emerald-500/20 shadow-[0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "bg-white/80 border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl"
          : isDark
            ? "bg-transparent border-transparent shadow-none"
            : "bg-transparent border-transparent shadow-none"
      }`}
    >
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={navigateToHome}
            className="text-lg sm:text-xl font-heading font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 text-transparent bg-clip-text cursor-pointer hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            Krunal
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-2 bg-white/[0.02] border border-white/[0.04] p-1 rounded-full backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs xl:text-sm font-medium transition-all duration-300 whitespace-nowrap
                  ${
                    isDark 
                      ? "text-slate-400 hover:text-white hover:bg-emerald-500/10 hover:shadow-[0_0_10px_rgba(16,185,129,0.15)] border border-transparent hover:border-emerald-500/20" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={handleContactClick}
              className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 text-slate-950 px-6 py-2.5 rounded-full text-xs xl:text-sm font-heading font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] cursor-pointer whitespace-nowrap"
            >
              <RiContactsLine className="text-base" />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2.5 rounded-full border transition-colors ${
                isDark 
                  ? "border-white/10 hover:bg-white/5 text-white" 
                  : "border-slate-200 hover:bg-black/5 text-slate-800"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <IoMdClose className="w-5 h-5" />
              ) : (
                <GiHamburgerMenu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen
              ? "max-h-[400px] opacity-100 mt-4 pb-2"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-2 border-t border-white/10 dark:border-white/5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium ${
                  isDark
                    ? "text-slate-300 hover:bg-emerald-500/10 hover:text-white"
                    : "text-slate-600 hover:bg-black/5 hover:text-slate-900"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
            <button
              onClick={handleContactClick}
              className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 text-slate-950 px-4 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg mt-2 flex items-center justify-center gap-2 cursor-pointer"
            >
              <RiContactsLine className="text-lg" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator Line (Fades in when scrolled) */}
      <div 
        className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 transition-all duration-200 rounded-full
          ${isScrolled ? "opacity-100" : "opacity-0"}`}
        style={{ width: `${scrollProgress}%` }}
      />
    </nav>
  );
};

export default Navbar;
