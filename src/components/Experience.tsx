import React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { Calendar, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="relative border-t border-neutral-200/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey and experience in software engineering."
        />

        <div className="relative space-y-8">
          {/* Subtle timeline vertical track for desktop */}
          <div
            className="pointer-events-none absolute bottom-4 left-4 top-4 hidden w-px bg-neutral-200 md:block"
            aria-hidden="true"
          />

          {experiences.map((exp) => (
            <div key={exp.id} className="group relative md:pl-12">
              {/* Timeline marker for desktop */}
              <div
                className="absolute left-2 top-7 hidden h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-blue-600 bg-white transition-transform group-hover:scale-125 md:flex"
                aria-hidden="true"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              </div>

              {/* Experience Card */}
              <div className="card-glow rounded-2xl border border-neutral-200/60 bg-white p-6 transition-all duration-200 hover:border-neutral-200/60 sm:p-7">
                {/* Header Row */}
                <div className="mb-4 flex flex-col justify-between gap-3 border-b border-neutral-100 pb-4 sm:flex-row sm:items-center">
                  <div>
                    <div className="mb-1 font-mono text-[13px] font-light text-blue-600">
                      {exp.type}
                    </div>
                    <h3 className="text-lg font-light tracking-tight text-neutral-900 sm:text-xl">
                      {exp.role}
                    </h3>
                    <div className="mt-0.5 flex items-center gap-2 text-[13px] font-light text-[#525252]">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 underline-offset-2 transition-colors hover:text-blue-600 hover:underline"
                        >
                          <span>{exp.company}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-[#737373]" />
                        </a>
                      ) : (
                        <span>{exp.company}</span>
                      )}
                    </div>
                  </div>

                  {/* Metadata: Period & Location */}
                  <div className="flex gap-3 font-mono text-[13px] text-[#737373] sm:flex-col sm:items-end sm:gap-1">
                    <div className="flex items-center gap-1.5 font-light text-neutral-800">
                      <Calendar className="h-3.5 w-3.5 text-blue-600" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#737373]">
                      <MapPin className="h-3.5 w-3.5 text-[#737373]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="mb-5 text-[13px] leading-relaxed text-[#525252]">{exp.summary}</p>

                {/* Problems Solved */}
                <div className="mb-6">
                  <h4 className="mb-3 flex items-center gap-1.5 font-mono text-[13px] font-light uppercase tracking-wider text-[#525252]">
                    <span>Key Engineering Challenges & Contributions</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.keyProblemsSolved.map((item, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[#525252]"
                      >
                        <CheckCircle2 className="mt-[3px] h-3.5 w-3.5 shrink-0 text-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <ul className="flex flex-wrap gap-1.5 border-t border-neutral-100 pt-4">
                  {exp.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-neutral-200/80 bg-white/60 px-2.5 py-0.5 font-mono text-[13px] font-light text-[#525252] transition-colors duration-300 hover:border-indigo-200 hover:text-indigo-600"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
