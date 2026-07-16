import type { Metadata } from "next";
import { Inter, Space_Grotesk, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Liladhar Ithole | Full Stack SDE & Best Frontend Engineer",
  description: "Liladhar Ithole is a Full Stack SDE, Backend Developer, Frontend Engineer, and AI Engineer in Pune, India. Specializing in high-performance NestJS, Next.js, MySQL, and scalable Node.js architectures.",
  keywords: [
    "lila",
    "liladhar",
    "liladharr",
    "liladharrrrr",
    "liladhar ithole",
    "liluu",
    "lilu",
    "sde",
    "software",
    "software developer",
    "frontend developer",
    "backend developer",
    "full stack",
    "JavaScript developer",
    "TypeScript developer",
    "JavaScript",
    "TypeScript",
    "AI",
    "Artificial Intelligence",
    "Agentic AI",
    "Python",
    "Python AI",
    "AI Software Engineer",
    "Java",
    "Data Structures and Algorithms",
    "DSA",
    "Algorithms",
    "Problem Solving",
    "Java SDE",
    "Java developer Pune",
    "Liladhar Ithole Pune",
    "best SDE India",
    "best frontend developer India",
    "best frontend engineer",
    "backend engineer India",
    "full stack software engineer Pune",
    "full stack engineer Pune",
    "software engineer Bengaluru",
    "software developer Bangalore",
    "SDE Bangalore",
    "frontend developer Bangalore",
    "backend developer Bengaluru",
    "SDE Hyderabad",
    "software engineer Hyderabad",
    "frontend developer Hyderabad",
    "backend developer Hyderabad",
    "SDE Mumbai",
    "software engineer Mumbai",
    "software engineer Delhi NCR",
    "SDE Noida",
    "SDE Gurgaon",
    "software developer Chennai",
    "NestJS developer India",
    "MySQL developer India",
    "Software Development Engineer",
    "top frontend developer Pune",
    "React developer India",
    "Node developer India",
    "BullMQ background jobs expert",
    "Redis backend developer India",
    "best full stack engineer India"
  ],
  authors: [{ name: "Liladhar Ithole", url: "https://github.com/Liladharithole" }],
  creator: "@Liladharrrrr",
  publisher: "Liladhar Ithole",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://liladhar.com",
    title: "Liladhar Ithole | Full Stack SDE & Best Frontend Engineer in India",
    description: "Liladhar Ithole is a top Full Stack SDE, Frontend Engineer, and Backend Developer in Pune, India. Specializing in high-performance NestJS, Next.js, MySQL, and scalable Node.js architectures.",
    siteName: "Liladhar Ithole Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liladhar Ithole | Full Stack SDE & Best Frontend Engineer in India",
    description: "Liladhar Ithole is a top Full Stack SDE, Frontend Engineer, and Backend Developer in Pune, India. Specializing in high-performance NestJS, Next.js, MySQL, and scalable Node.js architectures.",
    creator: "@Liladharrrrr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Structured JSON-LD Data for Google Search Indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Liladhar Ithole",
              "url": "https://liladhar.com",
              "sameAs": [
                "https://github.com/Liladharithole",
                "https://www.linkedin.com/in/liladhar-ithole/",
                "https://x.com/Liladharrrrr"
              ],
              "jobTitle": "Full Stack Software Development Engineer",
              "knowsAbout": [
                "React.js",
                "Next.js",
                "Node.js",
                "Express.js",
                "NestJS",
                "MySQL",
                "Redis",
                "BullMQ",
                "TypeScript",
                "Tailwind CSS",
                "Full Stack Development",
                "Frontend Engineering",
                "Software Engineering"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressCountry": "India"
              }
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
