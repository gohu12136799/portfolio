"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Menu, X, Download, FileText } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Tech Stack" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-neutral-200/80 bg-[#fafafa]/90 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="sm:h-18 flex h-16 items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="group flex items-center gap-2.5 rounded font-mono text-sm font-light tracking-tight text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:text-neutral-100 sm:text-base"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-xs font-light text-white transition-colors group-hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:group-hover:bg-white">
              HT
            </span>
            <div className="flex flex-col">
              <span className="leading-tight transition-colors group-hover:text-blue-600">
                {portfolioData.personal.name}
              </span>
              <span className="font-sans text-[10px] font-light leading-none text-[#737373] dark:text-neutral-500">
                {portfolioData.personal.displayRole}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-1 rounded-full border border-neutral-200/80 bg-neutral-100/90 px-3 py-1.5 dark:border-neutral-800 dark:bg-neutral-900/80 md:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-3 py-1.5 text-xs font-light transition-all duration-150 ${
                    isActive
                      ? "bg-white font-light text-blue-600 dark:bg-neutral-800 dark:text-blue-400"
                      : "text-[#525252] hover:bg-neutral-200/60 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Download CV / Contact */}
          <div className="hidden items-center gap-3 sm:flex">
            <ThemeToggle />
            <a
              href="#contact"
              className="px-3 py-2 text-xs font-light text-[#525252] transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              Get in Touch
            </a>
            <a
              href={portfolioData.personal.resumeUrl}
              download
              className="group inline-flex items-center gap-1.5 rounded-full bg-neutral-900/90 px-4 py-1.5 text-xs font-light tracking-wide text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 dark:bg-white/10 dark:hover:bg-white/20"
            >
              <FileText className="h-3.5 w-3.5" strokeWidth={1.5} />
              <span>Resume</span>
              <Download
                className="h-3 w-3 text-neutral-300 transition-transform duration-300 group-hover:translate-y-0.5"
                strokeWidth={1.5}
              />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle className="sm:hidden" />
            <a
              href={portfolioData.personal.resumeUrl}
              download
              className="rounded-full border border-neutral-300/70 bg-white/50 p-2 text-xs font-light text-[#525252] backdrop-blur-sm transition-colors duration-300 hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900/50 dark:text-neutral-400 dark:hover:text-white"
              aria-label="Download Resume"
            >
              <FileText className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full p-2 text-[#525252] transition-colors duration-300 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-blue-400/60 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="animate-fade-in border-b border-neutral-200/60 bg-[#fafafa] px-4 pb-6 pt-3 shadow-lg dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`rounded-lg px-3 py-2.5 text-sm font-light transition-colors ${
                    isActive
                      ? "border-l-2 border-blue-600 bg-white pl-3 font-light text-blue-600 dark:bg-neutral-900 dark:text-blue-400"
                      : "text-[#525252] hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="mt-2 flex flex-col gap-2 border-t border-neutral-200/60 pt-3 dark:border-neutral-800">
              <a
                href={portfolioData.personal.resumeUrl}
                download
                onClick={closeMobileMenu}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-neutral-900/90 px-4 py-2.5 text-xs font-light tracking-wide text-white transition-colors duration-300 hover:bg-neutral-800 dark:bg-white/10 dark:hover:bg-white/20"
              >
                <FileText className="h-4 w-4" strokeWidth={1.5} />
                <span>Download Resume</span>
                <Download className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="w-full rounded-full border border-neutral-300/70 bg-white/50 px-4 py-2.5 text-center text-xs font-light tracking-wide text-[#525252] transition-colors duration-300 hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900/50 dark:text-neutral-400 dark:hover:text-white"
              >
                Contact Me
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
