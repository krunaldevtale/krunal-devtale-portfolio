import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import CreativeBackground from "@/components/CreativeBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Global fixed 3D space background */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
        <CreativeBackground />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </main>
  );
}
