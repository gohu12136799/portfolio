import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-grid-pattern flex min-h-screen flex-col bg-[#fafafa] text-[#525252] selection:bg-blue-600/15 selection:text-neutral-900 dark:bg-neutral-950 dark:text-neutral-400 dark:selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full flex-1" id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
