import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.05] bg-[#07090e] py-12 font-mono text-xs text-slate-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-4 sm:text-left">
          <span className="font-light text-slate-300">{portfolioData.personal.name}</span>
          <span className="hidden text-slate-700 sm:inline">•</span>
          <span>{portfolioData.personal.displayRole}</span>
          <span className="hidden text-slate-700 sm:inline">•</span>
          <span>© {currentYear} All rights reserved.</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-slate-400">Built with Next.js, TypeScript & Tailwind CSS</span>
          <a
            href="#"
            className="rounded-lg border border-white/[0.06] bg-[#11141e] p-2 text-slate-400 transition-colors hover:bg-[#181d2a] hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
