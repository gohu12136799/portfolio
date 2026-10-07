"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  // Icons swap via the `dark` class so server and client markup always match.
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className={`group relative flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300/70 bg-white/50 text-[#525252] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 dark:border-neutral-700 dark:bg-neutral-900/50 dark:text-neutral-400 dark:hover:text-white ${className}`}
    >
      <Sun
        className="h-4 w-4 rotate-0 scale-100 transition-transform duration-500 group-hover:rotate-45 dark:-rotate-90 dark:scale-0"
        strokeWidth={1.5}
      />
      <Moon
        className="absolute h-4 w-4 rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100 dark:group-hover:-rotate-12"
        strokeWidth={1.5}
      />
    </button>
  );
}
