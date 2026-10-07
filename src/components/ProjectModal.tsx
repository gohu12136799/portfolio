"use client";

import React, { useEffect } from "react";
import { ProjectItem } from "@/data/portfolio";
import { X, ExternalLink, CheckCircle2, AlertCircle, Wrench, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="backdrop-blur-xs fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-black/40 p-4 sm:p-6 md:p-10"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-neutral-200/60 bg-white p-6 text-left shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-[#737373] transition-colors hover:bg-neutral-100 hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-blue-600 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
          aria-label="Close project modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Category & Role */}
        <div className="mb-3 font-mono text-xs font-light text-[#737373] dark:text-neutral-500">
          <span className="text-blue-600 dark:text-blue-400">{project.category}</span> · Role:{" "}
          {project.role}
        </div>

        {/* Title */}
        <h3
          id="modal-title"
          className="text-xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-2xl"
        >
          {project.name}
        </h3>
        <p className="mb-5 mt-1 text-sm font-light text-[#737373] dark:text-neutral-500">
          {project.subtitle}
        </p>

        {/* Description */}
        <div className="mb-6 rounded-xl border border-neutral-200/60 bg-neutral-50 p-4 text-body leading-relaxed text-[#525252] dark:border-neutral-800 dark:bg-neutral-800/40 dark:text-neutral-400">
          {project.description}
        </div>

        {/* Engineering Challenges */}
        <div className="mb-6 space-y-2">
          <h4 className="flex items-center gap-1.5 font-mono text-xs font-light uppercase tracking-wider text-amber-800 dark:text-amber-400">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <span>Key Engineering Challenges</span>
          </h4>
          <p className="border-l-2 border-amber-500 pl-5 text-body leading-relaxed text-[#525252] dark:text-neutral-400">
            {project.keyChallenges}
          </p>
        </div>

        {/* Key Contribution & Solution */}
        <div className="mb-6 space-y-2">
          <h4 className="flex items-center gap-1.5 font-mono text-xs font-light uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
            <Wrench className="h-4 w-4 text-emerald-600" />
            <span>Key Technical Contribution</span>
          </h4>
          <p className="border-l-2 border-emerald-500 pl-5 text-body leading-relaxed text-[#525252] dark:text-neutral-400">
            {project.keyContribution}
          </p>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="mb-2.5 flex items-center gap-1.5 font-mono text-xs font-light uppercase tracking-wider text-[#525252] dark:text-neutral-400">
            <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
            <span>Architectural Highlights</span>
          </h4>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-2 py-1 text-xs font-light text-[#525252] dark:text-neutral-400"
              >
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-blue-600 dark:text-blue-400" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-7">
          <h4 className="mb-2 font-mono text-xs font-light uppercase tracking-wider text-[#525252] dark:text-neutral-400">
            Technologies Used
          </h4>
          <p className="font-mono text-xs font-light leading-relaxed text-[#737373] dark:text-neutral-500">
            {project.techStack.join(" · ")}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200/60 pt-5 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900/90 px-5 py-2 text-xs font-light tracking-wide text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-neutral-800 dark:bg-white/10 dark:hover:bg-white/20"
              >
                <span>Live Experience</span>
                <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300/70 bg-white/50 px-5 py-2 text-xs font-light tracking-wide text-neutral-700 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-neutral-400/60 hover:bg-white hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900/50 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>Repository</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-3 py-2 text-xs font-light text-[#525252] transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
