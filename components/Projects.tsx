"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects, ProjectItem } from "@/data/projectsData";

interface ProjectCardProps {
  project: ProjectItem;
  isDark: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isDark }) => {
  const cardRef = useMouseGlow<HTMLDivElement>();

  return (
    <div
      ref={cardRef}
      className="bento-card glow-card flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] text-left h-full"
    >
      {/* Image Container with Hover Overlay */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#0d0e15]/50">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Actions Hover Cover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 px-4 z-20">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 shadow-lg cursor-pointer"
          >
            <span>Live</span>
            <FiExternalLink className="text-xs" />
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 bg-[#0a0b10] hover:bg-slate-900 text-slate-200 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 border border-white/10 cursor-pointer"
          >
            <span>Code</span>
            <FiGithub className="text-xs" />
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        <h3 className="text-lg font-heading font-semibold tracking-tight text-slate-100 group-hover:text-emerald-400 transition-colors">
          {project.name}
        </h3>
        
        <p className="mt-3 text-sm leading-relaxed font-primary font-light text-slate-300 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2.5 py-0.5 rounded border border-white/5 bg-white/5 text-slate-400 hover:text-white transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] font-mono px-2 py-0.5 text-slate-500">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { isDark } = useTheme();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="projects"
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
            Projects
          </h2>
          <div className="section-accent-gradient" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
