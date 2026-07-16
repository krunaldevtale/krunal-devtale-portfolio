"use client";

import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { BiBookContent, BiBriefcase } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

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
      label: "About Me",
      icon: <AiOutlineUser className="text-xl" />,
    },
    {
      href: "#experience",
      label: "Experience",
      icon: <BiBriefcase className="text-xl" />,
    },
    {
      href: "#skills",
      label: "Skills",
      icon: <BiBookContent className="text-xl" />,
    },
    {
      href: "#projects",
      label: "Projects",
      icon: <AiOutlineProject className="text-xl" />,
    },
    {
      href: "#services",
      label: "Services",
      icon: <MdMiscellaneousServices className="text-xl" />,
    },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 transition-all duration-300 border shadow-lg backdrop-blur-lg
      ${isMenuOpen ? "rounded-3xl" : "rounded-full"}
      ${
        isDark
          ? "bg-black/40 text-white border-white/10 shadow-black/25"
          : "bg-white/40 text-gray-800 border-black/10 shadow-black/5"
      }`}
    >
      <div className="px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={navigateToHome}
            className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-transparent bg-clip-text cursor-pointer hover:scale-105 transition-transform whitespace-nowrap"
          >
            Liladhar
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 text-sm font-medium transition-all duration-300 group whitespace-nowrap ${
                  isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span className="hidden xl:inline-block transform group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </span>
                <span className="relative py-1">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            ))}
          </div>

          {/* Desktop Actions (Contact Only) */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Contact Button - Desktop */}
            <button
              onClick={handleContactClick}
              className="flex items-center gap-1.5 bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer whitespace-nowrap"
            >
              <RiContactsLine className="text-lg hidden xl:inline-block" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? "hover:bg-white/10" : "hover:bg-black/5"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <IoMdClose className="w-6 h-6" />
              ) : (
                <GiHamburgerMenu className="w-6 h-6" />
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
                    ? "text-slate-300 hover:bg-white/5 hover:text-white"
                    : "text-slate-600 hover:bg-black/5 hover:text-slate-900"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
            <button
              onClick={handleContactClick}
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg mt-2 flex items-center justify-center gap-2 cursor-pointer"
            >
              <RiContactsLine className="text-lg" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
