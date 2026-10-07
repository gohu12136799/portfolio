"use client";

import React, { useState } from "react";
import { portfolioData, ProjectItem } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { ProjectModal } from "./ProjectModal";
import { ExternalLink, ArrowUpRight, AlertCircle, Wrench, Maximize2 } from "lucide-react";
import { GithubIcon } from "./Icons";

export function Projects() {
  const { projects } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative border-t border-neutral-200/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Projects"
          subtitle="Selected work and side projects I’m most proud of."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-glow group flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/60 bg-white transition-all duration-200 hover:-translate-y-1"
            >
              <div className="p-6 sm:p-7">
                {/* Meta Header */}
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-light text-[#737373]">
                    <span className="text-blue-600">{project.category}</span> · {project.role}
                  </span>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="rounded-full p-1.5 text-[#737373] transition-colors hover:bg-neutral-100 hover:text-blue-600"
                    aria-label={`Open engineering details for ${project.name}`}
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-light tracking-tight text-neutral-900 transition-colors group-hover:text-blue-600 sm:text-xl">
                  {project.name}
                </h3>
                <p className="mb-4 mt-0.5 font-sans text-xs font-light text-[#737373]">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="mb-5 text-body leading-relaxed text-[#525252]">
                  {project.description}
                </p>

                {/* Structured Engineering Challenge & Contribution */}
                <div className="mb-5 space-y-3.5 rounded-xl border border-neutral-200/60 bg-neutral-50 p-4">
                  <div>
                    <div className="mb-1 flex items-center gap-1.5 font-mono text-[11px] font-light uppercase tracking-wider text-amber-800">
                      <AlertCircle className="h-3.5 w-3.5 text-amber-600" />
                      <span>Engineering Challenge</span>
                    </div>
                    <p className="text-body leading-relaxed text-[#525252]">
                      {project.keyChallenges}
                    </p>
                  </div>

                  <div className="border-t border-neutral-200/60 pt-2">
                    <div className="mb-1 flex items-center gap-1.5 font-mono text-[11px] font-light uppercase tracking-wider text-emerald-800">
                      <Wrench className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Key Contribution</span>
                    </div>
                    <p className="text-body leading-relaxed text-[#525252]">
                      {project.keyContribution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer: Tech Stack + Links */}
              <div className="flex flex-col gap-3 border-t border-neutral-100 bg-neutral-50/70 px-6 py-4 sm:px-7">
                <p className="font-mono text-xs font-light leading-relaxed text-[#737373]">
                  {project.techStack.join(" · ")}
                </p>

                <div className="flex items-center justify-between border-t border-neutral-200/50 pt-2">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1 font-mono text-xs font-light text-blue-600 transition-colors hover:text-blue-700"
                  >
                    <span>Read Deep-Dive</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-neutral-300/70 bg-white/50 px-3 py-1 text-xs font-light text-neutral-700 transition-colors duration-300 hover:bg-white hover:text-neutral-900"
                        aria-label={`Live demo for ${project.name}`}
                      >
                        <span>Demo</span>
                        <ExternalLink className="h-3 w-3 text-[#737373]" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-neutral-300/70 bg-white/50 px-3 py-1 text-xs font-light text-[#525252] transition-colors duration-300 hover:bg-white hover:text-neutral-900"
                        aria-label={`GitHub repo for ${project.name}`}
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Architecture Deep-Dive */}
        <ProjectModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />
      </div>
    </section>
  );
}
