"use client";

import React from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { ArrowLeft, Printer, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ResumePage() {
  const { personal, experiences, techStack, engineeringStrengths, projects } = portfolioData;

  return (
    <div className="min-h-screen bg-[#090a0f] px-4 py-10 text-slate-200 sm:px-6 lg:px-8 print:bg-white print:p-0 print:text-black">
      <div className="mx-auto max-w-4xl">
        {/* Navigation & Print Actions (Hidden in Print) */}
        <div className="mb-8 flex items-center justify-between border-b border-white/[0.08] pb-4 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>

          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-mono text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-500"
          >
            <Printer className="h-4 w-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>

        {/* Printable Resume Sheet */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0e111a] p-8 sm:p-12 print:border-none print:bg-white print:p-0 print:text-black">
          {/* Header */}
          <div className="mb-6 border-b border-white/[0.08] pb-6 print:border-slate-300">
            <h1 className="text-3xl font-extrabold tracking-tight text-white print:text-black">
              {personal.name}
            </h1>
            <p className="mt-1 text-base font-semibold text-blue-400 print:text-blue-700">
              {personal.displayRole} • 4+ Years Experience
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-slate-400 print:text-slate-600">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-blue-400 print:text-slate-700" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-blue-400 print:text-slate-700" />
                <span>{personal.email}</span>
              </div>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white print:text-slate-700"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>github.com/gohu</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white print:text-slate-700"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                <span>linkedin.com/in/gohu</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8">
            <h2 className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-blue-400 print:text-blue-800">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 print:text-slate-800">
              {personal.bio} Proven track record building and scaling high-traffic classifieds and
              marketplace platforms within the Chợ Tốt ecosystem. Strong expertise in list
              virtualization, Core Web Vitals optimization, and bidirectional URL filter
              synchronization. Experienced in cross-functional Agile delivery, mobile-first Zalo
              Mini Apps, and AI-assisted workflows.
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-8">
            <h2 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-blue-400 print:text-blue-800">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="mb-1 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h3 className="text-base font-bold text-white print:text-black">
                      {exp.role}{" "}
                      <span className="font-normal text-slate-400 print:text-slate-600">
                        @ {exp.company}
                      </span>
                    </h3>
                    <span className="shrink-0 font-mono text-xs text-slate-400 print:text-slate-600">
                      {exp.period} • {exp.location}
                    </span>
                  </div>
                  <p className="mb-2 text-xs italic text-slate-300 print:text-slate-700">
                    {exp.summary}
                  </p>
                  <ul className="list-outside list-disc space-y-1.5 pl-4 text-xs text-slate-300 print:text-slate-800">
                    {exp.keyProblemsSolved.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 font-mono text-[11px] text-slate-400 print:text-slate-600">
                    <span className="font-semibold text-slate-300 print:text-slate-800">Tech:</span>{" "}
                    {exp.techStack.join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Featured Projects */}
          <div className="mb-8">
            <h2 className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-blue-400 print:text-blue-800">
              Selected Featured Projects
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-lg border border-white/[0.06] bg-[#121623] p-3.5 print:border-slate-300 print:bg-slate-50"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-white print:text-black">{proj.name}</h3>
                    <span className="font-mono text-[10px] text-blue-400 print:text-blue-700">
                      {proj.category}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] leading-snug text-slate-300 print:text-slate-700">
                    {proj.description}
                  </p>
                  <div className="mt-2 font-mono text-[10px] text-slate-400 print:text-slate-600">
                    {proj.highlights[0]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Matrix */}
          <div className="mb-8">
            <h2 className="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-blue-400 print:text-blue-800">
              Technical Stack & Domain Skills
            </h2>
            <div className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">
              {techStack.map((cat, idx) => (
                <div key={idx} className="leading-snug">
                  <span className="font-mono font-bold text-slate-200 print:text-black">
                    {cat.title}:
                  </span>{" "}
                  <span className="text-slate-300 print:text-slate-700">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Strengths */}
          <div>
            <h2 className="mb-2 font-mono text-xs font-bold uppercase tracking-wider text-blue-400 print:text-blue-800">
              Engineering Focus
            </h2>
            <p className="font-mono text-xs leading-relaxed text-slate-300 print:text-slate-800">
              {engineeringStrengths.map((s) => s.title).join(" • ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
