"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { FaNodeJs, FaDatabase } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { AiOutlineCloudServer } from "react-icons/ai";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: ServiceItem;
  isDark: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isDark }) => {
  const cardRef = useMouseGlow<HTMLDivElement>();

  return (
    <div
      ref={cardRef}
      className="bento-card glow-card flex flex-col p-6 text-left h-full transition-all duration-300 hover:scale-[1.03]"
    >
      {/* Icon Wrapper with a nice subtle color-themed background blob */}
      <div className="mb-5 text-3xl p-3 bg-white/[0.03] border border-white/5 rounded-xl w-fit flex items-center justify-center filter drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]">
        {service.icon}
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-heading font-semibold tracking-tight text-slate-100 group-hover:text-emerald-400 transition-colors">
        {service.title}
      </h3>
      
      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed font-primary font-light text-slate-300 flex-grow">
        {service.description}
      </p>
    </div>
  );
};

const Services: React.FC = () => {
  const { isDark } = useTheme();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const services: ServiceItem[] = [
    {
      icon: <BiCodeAlt className="text-3xl text-teal-400" />,
      title: "Frontend Engineering",
      description:
        "Crafting highly interactive, responsive user interfaces using React, Next.js, and TypeScript. Translating Figma designs into pixel-perfect layouts with custom micro-animations and clean state management.",
    },
    {
      icon: <FaNodeJs className="text-3xl text-emerald-400" />,
      title: "Backend & Systems",
      description:
        "Architecting high-throughput server business logic, scalable REST APIs, and modular microservices using NestJS, Node.js, and Express.js with a focus on runtime scalability.",
    },
    {
      icon: <FaDatabase className="text-3xl text-amber-400" />,
      title: "Database Design & Tuning",
      description:
        "Architecting robust relational database schemas in MySQL, designing custom relational structures, and optimizing complex SQL queries and index configurations to ensure fast transaction execution.",
    },
    {
      icon: <AiOutlineCloudServer className="text-3xl text-emerald-400" />,
      title: "Deployment & Hosting",
      description:
        "Deploying applications to serverless architectures and managed cloud environments. Implementing automated CI/CD pipelines, configuring secure environment variables, and ensuring high service availability.",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 py-24 relative z-10 overflow-hidden"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight section-heading-gradient">
            Services
          </h2>
          <div className="section-accent-gradient" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
