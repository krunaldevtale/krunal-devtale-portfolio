import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaServer,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVercel,
} from "react-icons/si";

export interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

export interface SkillGroup {
  title: string;
  skills: SkillItem[];
}

export const getSkillGroups = (isDark: boolean): SkillGroup[] => [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-[#F7DF1E]" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-[#3178C6]" />,
      },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      {
        name: "React.js",
        icon: <FaReact className="text-[#61DAFB]" />,
      },
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-[#E34F26]" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-[#1572B6]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
      },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-[#339933]" />,
      },
      { 
        name: "Express.js", 
        icon: <SiExpress className={isDark ? "text-white" : "text-gray-800"} /> 
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-[#47A248]" />,
      },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-[#F05032]" />,
      },
      { 
        name: "GitHub", 
        icon: <FaGithub className={isDark ? "text-white" : "text-gray-800"} /> 
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-[#FF6C37]" />,
      },
      {
        name: "Vercel",
        icon: <SiVercel className={isDark ? "text-white" : "text-gray-800"} />
      },
      {
        name: "Render",
        icon: <FaServer className="text-[#46a2f1]" />,
      },
    ],
  },
];
