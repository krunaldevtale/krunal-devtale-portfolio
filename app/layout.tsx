import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Krunal Devtale | Full Stack SDE & Software Engineer",
  description: "Krunal Devtale is a Full Stack SDE, Backend Developer, and Frontend Engineer in Pune, India. Specializing in high-performance NestJS, Next.js, MySQL, and scalable Node.js architectures.",
  keywords: [
    "krunal",
    "devtale",
    "krunal devtale",
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
    "AI Software Engineer",
    "Java",
    "Data Structures and Algorithms",
    "DSA",
    "Algorithms",
    "Problem Solving",
    "Java SDE",
    "Java developer Pune",
    "Krunal Devtale Pune",
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
  authors: [{ name: "Krunal Devtale", url: "https://github.com/KrunalDevtale" }],
  creator: "@KrunalDevtale",
  publisher: "Krunal Devtale",
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
    url: "https://krunaldevtale.com",
    title: "Krunal Devtale | Full Stack SDE & Software Engineer",
    description: "Krunal Devtale is a Full Stack SDE, Frontend Engineer, and Backend Developer in Pune, India. Specializing in high-performance NestJS, Next.js, MySQL, and scalable Node.js architectures.",
    siteName: "Krunal Devtale Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krunal Devtale | Full Stack SDE & Software Engineer",
    description: "Krunal Devtale is a Full Stack SDE, Frontend Engineer, and Backend Developer in Pune, India. Specializing in high-performance NestJS, Next.js, MySQL, and scalable Node.js architectures.",
    creator: "@KrunalDevtale",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Structured JSON-LD Data for Google Search Indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Krunal Devtale",
              "url": "https://krunaldevtale.com",
              "sameAs": [
                "https://github.com/KrunalDevtale",
                "https://www.linkedin.com/in/krunal-devtale/",
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
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
