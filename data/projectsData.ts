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
    id: 96,
    name: "MakeMyAI",
    description:
      "MakeMyAI - An AI-powered content creation suite that generates articles, blog titles, custom images, and reviews your resume dynamically.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL (Neon)",
      "Google Gemini AI",
      "Tailwind CSS",
      "Clerk Authentication",
      "Cloudinary",
      "Clipdrop API",
    ],
    image: "/projects/makemyai-min.png",
    liveLink: "https://makemyai.vercel.app/",
    githubLink: "https://github.com/Liladharithole/makemyai",
  },
  {
    id: 97,
    name: "Quick Blog AI",
    description:
      "Quick Blog AI - A MERN stack blogging platform featuring Google Gemini AI content generation, a full admin dashboard, Quill.js rich text editor, and JWT authentication.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Gemini AI",
      "Tailwind CSS",
      "JWT Auth",
      "ImageKit",
    ],
    image: "/projects/Quick_blog_ai.pmg.png",
    liveLink: "https://quick-blog-ai-client.vercel.app/",
    githubLink: "https://github.com/Liladharithole/Quick-Blog-AI",
  },
  {
    id: 98,
    name: "Crypto Price Tracker",
    description:
      "Crypto Price Tracker - A clean dashboard featuring real-time cryptocurrency tracking, market data visualization, and comparative Chart.js trends.",
    technologies: ["React", "CoinGecko API", "Chart.js", "CSS Modules"],
    image: "/projects/Crypto-tracker.png",
    liveLink: "https://liladhar-crypto-price-tracker.netlify.app/",
    githubLink: "https://github.com/Liladharithole/crypto-price-tracker",
  },
  {
    id: 99,
    name: "Food Delivery Website - Frontend",
    description:
      "Food Delivery - A responsive food ordering catalog, featuring dynamic shopping carts, order checkouts, and state-managed context checkout steps.",
    technologies: ["React", "React Router", "Context API", "CSS"],
    image: "/projects/food-del-1.png",
    liveLink: "https://food-delivery-site-1-60cd.onrender.com/",
    githubLink:
      "https://github.com/Liladharithole/food-delivery-site-1/tree/main/front-end",
  },
  {
    id: 100,
    name: "Spotify Clone",
    description:
      "Spotify Clone - A high-fidelity web player replica implementing audio music streaming, state play handlers, and responsive playlist layouts.",
    technologies: ["React", "Tailwind CSS"],
    image: "/projects/Spotify.png",
    liveLink: "https://liladhar-spotify-clone.netlify.app",
    githubLink: "https://github.com/Liladharithole/spotify-clone",
  },
];
