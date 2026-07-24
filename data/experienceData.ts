export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
  detailedDescription: string;
  responsibilities: string[];
  accomplishments: string[];
  logo?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Aibuzz Technoventures — PocketOffice",
    duration: "2024 - Present",
    description:
      "Built and maintained the complete frontend of PocketOffice, a smart cloud office management platform. Developed advanced authentication UI including Face Recognition login, Voice Verification, Google OAuth, and OTP-based verification.",
    skills: ["React.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion", "REST APIs"],
    detailedDescription:
      "At Aibuzz Technoventures, I engineer the client-side of PocketOffice, an enterprise-grade cloud office management suite. I develop advanced authentication flows, responsive admin panels, and highly interactive browser interfaces to deliver a seamless workspace desktop-style experience.",
    responsibilities: [
      "Built and maintained the complete frontend of PocketOffice, a smart cloud office management platform used for team collaboration.",
      "Developed advanced authentication UI, including Face Recognition login, Voice Verification, Google OAuth integration, and OTP-based two-step verification.",
      "Built responsive admin dashboards, user management panels, and dynamic iFrame-based navigation with animated page transitions.",
      "Implemented real-time theming, resizable UI components, and utility widgets to enhance the desktop-style browser interface.",
      "Collaborated with the backend team to integrate RESTful APIs and ensure smooth data flow across dashboard modules."
    ],
    accomplishments: [
      "Created highly secure front-end biometric interfaces for Face Recognition and Voice Verification logins.",
      "Optimized client-side rendering of dashboards inside dynamic frames, significantly improving page load responsiveness.",
      "Designed real-time theme configurations and resizable widgets to improve interface customization."
    ]
  }
];
