import React from "react";
import {
  siAntdesign,
  siCss,
  siDart,
  siFirebase,
  siFlutter,
  siGit,
  siGithubactions,
  siHtml5,
  siJavascript,
  siJira,
  siJsonwebtokens,
  siNextdotjs,
  siPython,
  siReact,
  siReactquery,
  siTailwindcss,
  siTypescript,
  siZalo,
  type SimpleIcon,
} from "simple-icons";
import { Atom, Bot, Boxes, Layers, Sparkles, Webhook, type LucideIcon } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

// Keyed by skill name in portfolioData.techStack. Brand logos come from simple-icons;
// skills without a brand logo fall back to a lucide icon.
const SKILL_ICONS: Record<string, SimpleIcon | LucideIcon> = {
  "React.js": siReact,
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  "JavaScript (ES6+)": siJavascript,
  "HTML5 & Semantic Web": siHtml5,
  "CSS3 / Modern CSS": siCss,
  Zustand: Layers,
  Jotai: Atom,
  "TanStack Query": siReactquery,
  "Tailwind CSS": siTailwindcss,
  "Ant Design": siAntdesign,
  "Micro-frontend": Boxes,
  "REST APIs": Webhook,
  "Authentication / Authz": siJsonwebtokens,
  Firebase: siFirebase,
  "Python + Flask": siPython,
  "Git & Version Control": siGit,
  "Agile / Scrum": siJira,
  "CI / CD Pipelines": siGithubactions,
  Flutter: siFlutter,
  Dart: siDart,
  "Zalo Mini App SDK": siZalo,
  "AI Integration": Sparkles,
  "AI-Assisted Dev (cursor, claude, antigravity, chatgpt)": Bot,
};

function SkillIcon({ name }: { name: string }) {
  const icon = SKILL_ICONS[name];

  if (icon && "path" in icon) {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill={`#${icon.hex}`} aria-hidden="true">
        <path d={icon.path} />
      </svg>
    );
  }

  const Icon = icon ?? Layers;
  return <Icon className="h-6 w-6 text-neutral-500" strokeWidth={1.5} aria-hidden="true" />;
}

export function TechStack() {
  const { techStack } = portfolioData;

  return (
    <section id="skills" className="relative border-t border-neutral-200/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Technical Stack & Tooling"
          subtitle="Organized by engineering domain, grounded strictly in practical production experience and active technical exploration."
        />

        <div className="space-y-10">
          {techStack.map((cat) => (
            <div key={cat.title}>
              <h3 className="mb-4 font-mono text-xs font-light uppercase tracking-[0.2em] text-cyan-500">
                {cat.title}
              </h3>

              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {cat.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="card-glow group flex flex-col items-center justify-center gap-3 rounded-xl border border-neutral-200/60 bg-white/70 px-3 py-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300/70"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-neutral-100/70 transition-transform duration-300 group-hover:scale-105">
                      <SkillIcon name={skill.name} />
                    </span>
                    <span className="text-[13px] font-light leading-tight text-neutral-800">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
