export interface ProjectItem {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink: string;
  githubLink: string;
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    name: "Job Portal",
    description:
      "A full-stack job portal featuring role-based dashboards for recruiters and candidates. Includes JWT authentication, protected routes, recruiter job creation with dynamic tags, candidate application tracking, and an animated interface built with Framer Motion.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "JWT Auth",
    ],
    image: "/projects/job_portal.png",
    liveLink: "https://job-portal-snb2.vercel.app/",
    githubLink: "https://github.com/krunaldevtale/job-portal",
  },
  {
    id: 2,
    name: "Crypto Price Tracker",
    description:
      "A real-time cryptocurrency price tracker dashboard that displays live prices, market caps, and historical price charts. Implemented with reactive search and filtering controls.",
    technologies: [
      "React",
      "Tailwind CSS",
      "CoinGecko API",
      "Chart.js",
    ],
    image: "/projects/Crypto-tracker.png",
    liveLink: "https://crypto-price-tracker-inky-alpha.vercel.app/",
    githubLink: "https://github.com/krunaldevtale/crypto-price-tracker",
  },
  {
    id: 3,
    name: "Sundown Studio Website",
    description:
      "A high-fidelity website recreation for Sundown Studio. Built with a focus on immersive animations, responsive modern layouts, and interactive typography that brings the creative workspace design to life.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "GSAP Animations",
      "Locomotive Scroll",
    ],
    image: "/projects/sundown_studio.png",
    liveLink: "https://sundown-studio-website-one.vercel.app/#",
    githubLink: "https://github.com/krunaldevtale/Sundown-Studio-Website",
  },
];
