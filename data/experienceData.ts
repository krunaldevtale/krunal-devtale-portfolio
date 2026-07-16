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
    role: "Software Development Engineer",
    company: "Zooper Technologies Pvt Ltd (Pune)",
    duration: "Sep 2025 - June 2026",
    logo: "/images/zooper-logo.jpg",
    description:
      "Designed and developed scalable software components and web services. Built robust NestJS/Node.js APIs, optimized MySQL database queries, and implemented secure session validation to improve security and performance.",
    skills: ["Next.js", "NestJS", "Node.js", "MySQL", "Redis", "BullMQ", "TypeScript", "Docker"],
    detailedDescription:
      "At Zooper Technologies, I worked as a Software Development Engineer contributing to core web platforms. I engineered highly scalable RESTful services, designed relational database structures in MySQL, and wrote clean, maintainable backend code for high-throughput APIs.",
    responsibilities: [
      "Developed and maintained scalable microservices using NestJS and TypeScript, handling high-volume HTTP request routing.",
      "Collaborated with product teams to design relational database schemas in MySQL, writing complex queries and optimizing indexes.",
      "Implemented asynchronous task queues using BullMQ and Redis to process heavy background operations like bulk file uploads, reducing API timeout rates.",
      "Designed and built responsive dashboard interfaces using Next.js App Router and Tailwind CSS, leveraging server components for speed."
    ],
    accomplishments: [
      "Spearheaded the migration of legacy REST APIs to NestJS, increasing throughput by 30% and improving test coverage.",
      "Optimized MySQL query execution plans and database index configurations, resulting in a 50% decrease in database response latency.",
      "Designed clean, modular backend application layers that improved maintainability and decoupled database transactions."
    ]
  },
  {
    id: 2,
    role: "Full Stack Software Engineer (Freelance)",
    company: "aibuzz (Remote)",
    duration: "Dec 2024 - June 2025",
    description:
      "Designed and developed full-stack web applications from scratch. Created interactive user interfaces with React/Next.js and implemented stable, secure RESTful APIs with Node.js and MySQL.",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "MySQL", "TypeScript", "Tailwind CSS"],
    detailedDescription:
      "Working as a freelance engineer for aibuzz, I was responsible for delivering end-to-end full-stack web solutions. I built clean, responsive client-side pages and structured robust backend services, ensuring efficient data flows and secure user access controls.",
    responsibilities: [
      "Built reusable, responsive user interface components in React/Next.js and styled them using Tailwind CSS.",
      "Developed scalable backend REST APIs using Node.js and Express to support frontend application states.",
      "Designed and structured relational database schemas in MySQL, writing optimized SQL queries and database indexes.",
      "Implemented security validations, JWT-based user authentication, and secure endpoint controllers."
    ],
    accomplishments: [
      "Successfully built and deployed the web applications from scratch, achieving 100% project completion on schedule.",
      "Optimized SQL query performance and database relationships, reducing server response latency by 25%.",
      "Created custom component libraries that streamlined frontend styling and improved UI development efficiency."
    ]
  }
];
