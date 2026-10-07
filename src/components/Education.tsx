import React from "react";
import { BookOpen, Calendar, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  const { education, publications } = portfolioData;

  return (
    <section id="education" className="relative border-t border-neutral-200/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Education & Publications"
          subtitle="Academic background and research papers in semantic technologies and LLM applications."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-mono text-xs font-light uppercase tracking-[0.2em] text-cyan-500">
              Education
            </h3>
            <ul className="space-y-3">
              {education.map((edu) => (
                <li
                  key={edu.degree}
                  className="card-glow flex gap-4 rounded-xl border border-neutral-200/60 bg-white/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300/70"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-100/70">
                    <GraduationCap className="h-5 w-5 text-blue-500" strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-base font-light text-neutral-900">{edu.degree}</p>
                    <p className="mt-0.5 text-[13px] font-light leading-relaxed text-[#525252]">
                      {edu.school}
                    </p>
                    <p className="mt-2 flex items-center gap-1.5 font-mono text-xs font-light text-[#737373]">
                      <Calendar className="h-3.5 w-3.5 text-blue-500" />
                      {edu.period}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-xs font-light uppercase tracking-[0.2em] text-cyan-500">
              Publications
            </h3>
            <ul className="space-y-3">
              {publications.map((paper) => (
                <li
                  key={paper.title}
                  className="card-glow flex gap-4 rounded-xl border border-neutral-200/60 bg-white/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300/70"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-100/70">
                    <BookOpen className="h-5 w-5 text-violet-500" strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0">
                    <span className="mb-1.5 inline-block rounded-full border border-violet-200 bg-violet-50/60 px-2.5 py-0.5 font-mono text-[11px] font-light text-violet-600">
                      {paper.venue}
                    </span>
                    <p className="text-base font-light leading-snug text-neutral-900">
                      {paper.title}
                    </p>
                    <p className="mt-1 text-[13px] font-light leading-relaxed text-[#525252]">
                      {paper.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
