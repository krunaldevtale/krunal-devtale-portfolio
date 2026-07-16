"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FaNodeJs, FaDatabase } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineCloudServer } from "react-icons/ai";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const { isDark } = useTheme();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const services: ServiceItem[] = [
    {
      icon: <BiCodeAlt className="text-3xl text-purple-400" />,
      title: "Frontend Engineering",
      description:
        "Crafting highly interactive, responsive user interfaces using React, Next.js, and TypeScript. Translating Figma designs into pixel-perfect layouts with custom micro-animations and clean state management.",
    },
    {
      icon: <FaNodeJs className="text-3xl text-green-500" />,
      title: "Backend & Systems",
      description:
        "Architecting high-throughput server business logic, scalable REST APIs, and modular microservices using NestJS, Node.js, and Express.js with a focus on runtime scalability.",
    },
    {
      icon: <FaDatabase className="text-3xl text-blue-400" />,
      title: "Database Design & Tuning",
      description:
        "Architecting robust relational database schemas in MySQL, designing custom relational structures, and optimizing complex SQL queries and index configurations to ensure fast transaction execution.",
    },
    {
      icon: <AiOutlineCloudServer className="text-3xl text-blue-500" />,
      title: "Deployment & Hosting",
      description:
        "Deploying applications to serverless architectures and managed cloud environments. Implementing automated CI/CD pipelines, configuring secure environment variables, and ensuring high service availability.",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-20 relative z-10 overflow-hidden"
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
          {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-medium tracking-tight">
            Services
          </h2> */}
          <div className="w-12 h-[2px] bg-blue-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group flex flex-col p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:shadow-lg
                ${
                  isDark
                    ? "bg-slate-950/40 border-white/10 text-white shadow-black/20"
                    : "bg-white/40 border-black/10 text-gray-900 shadow-black/5"
                }`}
            >
              {/* Icon */}
              <div className="mb-4 text-3xl transform transition-transform duration-300 group-hover:scale-110 flex items-center">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-heading font-medium tracking-tight group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="mt-2 text-xs sm:text-sm leading-relaxed font-primary font-light text-slate-300 flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
