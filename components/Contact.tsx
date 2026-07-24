"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
} from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { SmoothInput } from "@/components/v1/skiper106";

const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 });

  // Mouse spotlight glow refs
  const infoCardRef = useMouseGlow<HTMLDivElement>();
  const formCardRef = useMouseGlow<HTMLDivElement>();

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/mdaqoavr", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          _subject: `New portfolio contact: ${subject}`,
          message,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
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
            Contact Me
          </h2>
          <div className="section-accent-gradient" />
        </div>

        {/* Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Contact Details */}
          <div
            ref={infoCardRef}
            className="bento-card glow-card p-8 sm:p-10 flex flex-col justify-between text-left"
          >
            <div>
              <h3 className="text-xl font-heading font-semibold text-slate-200 mb-6">Contact Information</h3>
              <p className="text-sm sm:text-base leading-relaxed font-primary font-light text-slate-300 mb-8">
                Feel free to reach out for collaborations, project opportunities, or just to say hello! I will do my best to get back to you as soon as possible.
              </p>

              <div className="flex flex-col gap-6 text-slate-300 font-primary font-light">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform duration-200">
                    <FiMail />
                  </div>
                  <a href="mailto:krunaldevtale79@gmail.com" className="hover:text-emerald-400 text-sm sm:text-base transition-colors">
                    krunaldevtale79@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform duration-200">
                    <FiPhone />
                  </div>
                  <a href="tel:+917999901088" className="hover:text-emerald-400 text-sm sm:text-base transition-colors">
                    +91 7999901088
                  </a>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform duration-200">
                    <IoLocationOutline />
                  </div>
                  <span className="text-sm sm:text-base">Pune, India</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-8 mt-8 border-t border-white/5 flex gap-4">
              <a
                href="https://github.com/krunaldevtale"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center text-lg transition-transform hover:scale-110"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/krunal-devtale/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center text-lg transition-transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://x.com/KrunalDevtale"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white flex items-center justify-center text-lg transition-transform hover:scale-110"
                aria-label="Twitter"
              >
                <FiTwitter />
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div
            ref={formCardRef}
            className="bento-card glow-card p-8 sm:p-10 text-left"
          >
            <h3 className="text-xl font-heading font-semibold text-slate-200 mb-6">Send Message</h3>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5 font-primary">
              <div>
                <label htmlFor="form-name" className="block text-xs font-mono text-slate-400 mb-1.5">Name</label>
                <SmoothInput
                  id="form-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="form-email" className="block text-xs font-mono text-slate-400 mb-1.5">Email</label>
                <SmoothInput
                  id="form-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@mail.com"
                />
              </div>

              <div>
                <label htmlFor="form-subject" className="block text-xs font-mono text-slate-400 mb-1.5">Subject</label>
                <SmoothInput
                  id="form-subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Hello!"
                />
              </div>

              <div>
                <label htmlFor="form-message" className="block text-xs font-mono text-slate-400 mb-1.5">Message</label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Let's build something amazing..."
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#0d0e15]/40 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none placeholder:text-slate-500"
                />
              </div>

              {/* Status messages */}
              {status === "success" && (
                <div className="text-xs font-medium text-emerald-400 mt-1">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="text-xs font-medium text-rose-400 mt-1">
                  Failed to send message. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 hover:scale-[1.02] disabled:bg-emerald-800 text-white py-3.5 rounded-full text-sm font-heading font-medium flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
              >
                <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
