import React from "react";
import Image from "next/image";
import { Flower } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";

// Rendered back to front; `avatar` indexes into personal.avatars.
const AVATAR_CARDS = [
  {
    avatar: 1,
    transform: "-translate-x-3 -rotate-6 group-hover:-translate-x-8 group-hover:-rotate-12",
    placeholder: "bg-[linear-gradient(135deg,#bfdbfe,#ddd6fe,#fbcfe8)]",
  },
  {
    avatar: 2,
    transform: "translate-x-3 rotate-6 group-hover:translate-x-8 group-hover:rotate-12",
    placeholder: "bg-[linear-gradient(135deg,#fef08a,#bbf7d0,#bfdbfe)]",
  },
  {
    avatar: 0,
    transform: "group-hover:-translate-y-1",
    placeholder:
      "bg-[conic-gradient(from_180deg_at_50%_50%,#fecaca,#fed7aa,#fef08a,#bbf7d0,#bfdbfe,#ddd6fe,#fbcfe8,#fecaca)]",
  },
];

const stats = [
  { value: "5", label: "Years of Experience", gradient: "from-orange-500 to-pink-500" },
  { value: "10", label: "Projects Delivered", gradient: "from-blue-500 to-violet-500" },
  { value: "20", label: "Technologies", gradient: "from-emerald-500 to-sky-500" },
];

export function About() {
  const { personal } = portfolioData;
  const initials = personal.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <section
      id="about"
      className="relative scroll-mt-16 overflow-hidden border-t border-neutral-200/60 py-20 md:py-28"
    >
      {/* Decorative flower */}
      <Flower
        className="pointer-events-none absolute right-4 top-10 h-[280px] w-[280px] text-pink-400/[0.12] motion-safe:animate-[spin_90s_linear_infinite] sm:right-8 sm:h-[420px] sm:w-[420px] lg:right-[3%]"
        strokeWidth={0.6}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About me"
          subtitle="A little about me and my journey as a Software Engineer."
          badge="Not to be a hero, Just be not a zero!"
        />

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Avatar */}
          <div className="group relative mx-auto aspect-square w-full max-w-xs lg:col-span-4 lg:max-w-none">
            {AVATAR_CARDS.map((card) => {
              const src = personal.avatars[card.avatar];
              const isFront = card.avatar === 0;
              return (
                <div
                  key={card.avatar}
                  className={`absolute inset-[8%] origin-bottom overflow-hidden rounded-3xl border border-white/80 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-transform duration-500 ease-out ${card.transform}`}
                  aria-hidden={!isFront}
                >
                  {src ? (
                    <Image
                      src={src}
                      alt={isFront ? personal.name : ""}
                      fill
                      sizes="(min-width: 1024px) 320px, 280px"
                      className="object-cover"
                    />
                  ) : (
                    <>
                      <div className={`absolute inset-0 opacity-60 blur-2xl ${card.placeholder}`} />
                      {isFront && (
                        <span className="absolute inset-0 flex items-center justify-center text-7xl font-light tracking-tight text-neutral-800/80">
                          {initials}
                        </span>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <div className="space-y-10 lg:col-span-8">
            {/* Narrative Column */}
            <div className="space-y-5 hyphens-auto text-justify text-body leading-relaxed text-[#525252]">
              <p className="text-lg text-neutral-900">
                I am a Software Engineer specializing in the{" "}
                <strong className="font-light text-neutral-900">React</strong>,{" "}
                <strong className="font-light text-neutral-900">Next.js</strong>, and{" "}
                <strong className="font-light text-neutral-900">TypeScript</strong> ecosystem.
              </p>
              <p>
                I focus on building scalable, high-performance web applications with clean
                architecture and responsive user experiences. I also have experience building
                mobile-first applications, AI-powered internal tools, and cross-platform apps with
                Flutter and Dart.
              </p>
              <p>
                I enjoy solving complex problems and building reliable products that deliver real
                value and make everyday experiences more convenient for users.
              </p>
              {/* Quick summary pill container */}
              <p className="border-t border-neutral-200/60 pt-3 font-mono text-xs font-light text-[#737373]">
                High-Traffic Products · Product knowledge · User-friendly
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-glow flex h-full flex-col items-center justify-center rounded-2xl border border-neutral-200/60 bg-white/60 px-3 py-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-300/70 sm:py-5"
                >
                  <div
                    className={`bg-gradient-to-br bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl ${stat.gradient}`}
                  >
                    {stat.value}+
                  </div>
                  <div className="mt-1.5 font-mono text-[11px] font-light text-[#737373]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
