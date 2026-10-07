import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowDown } from "lucide-react";

// Delay is set inline: the `animate-*` shorthand would otherwise reset animation-delay.
const BLOBS = [
  { className: "top-[12%] left-[8%] w-72 h-72 sm:w-[420px] sm:h-[420px] bg-blue-400", delay: "0s" },
  {
    className: "top-[30%] right-[6%] w-64 h-64 sm:w-[380px] sm:h-[380px] bg-violet-400",
    delay: "-12s",
  },
  {
    className: "bottom-[10%] left-1/3 w-60 h-60 sm:w-[340px] sm:h-[340px] bg-pink-400",
    delay: "-24s",
  },
];

// Inner SVG markup of lucide icons (search, bot, brain, network, settings), 24x24 viewBox.
const ICON_SHAPES = {
  search: '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
  bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  brain:
    '<path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"/><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/><path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/>',
  network:
    '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
  settings:
    '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/>',
};

const ICON_PLACEMENTS: { icon: keyof typeof ICON_SHAPES; x: string; y: string; size: number }[] = [
  { icon: "search", x: "14%", y: "24%", size: 72 },
  { icon: "brain", x: "12%", y: "46%", size: 64 },
  { icon: "bot", x: "86%", y: "38%", size: 80 },
  { icon: "settings", x: "76%", y: "66%", size: 60 },
  { icon: "network", x: "36%", y: "82%", size: 68 },
  { icon: "brain", x: "90%", y: "18%", size: 56 },
  { icon: "settings", x: "62%", y: "88%", size: 52 },
];

const iconUrl = (shape: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">${shape}</svg>`,
  )}")`;

const iconMask = {
  image: ICON_PLACEMENTS.map((p) => iconUrl(ICON_SHAPES[p.icon])).join(", "),
  position: ICON_PLACEMENTS.map((p) => `${p.x} ${p.y}`).join(", "),
  size: ICON_PLACEMENTS.map((p) => `${p.size}px ${p.size}px`).join(", "),
};

const iconMaskStyle: React.CSSProperties = {
  maskImage: iconMask.image,
  maskPosition: iconMask.position,
  maskSize: iconMask.size,
  maskRepeat: "no-repeat",
  WebkitMaskImage: iconMask.image,
  WebkitMaskPosition: iconMask.position,
  WebkitMaskSize: iconMask.size,
  WebkitMaskRepeat: "no-repeat",
};

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      {/* Decorative background */}
      <div
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_65%,transparent)]"
        aria-hidden="true"
      >
        {BLOBS.map((blob, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-25 blur-[90px] motion-safe:animate-blob-rainbow ${blob.className}`}
            style={{ animationDelay: blob.delay }}
          />
        ))}

        {/* Same blobs at full color, visible only through the icon shapes */}
        <div className="absolute inset-0 opacity-50" style={iconMaskStyle}>
          {BLOBS.map((blob, i) => (
            <div
              key={i}
              className={`absolute rounded-full blur-[90px] motion-safe:animate-blob-rainbow ${blob.className}`}
              style={{ animationDelay: blob.delay }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex flex-col text-left">
            {/* Heading */}
            <h1 className="mb-5 font-light leading-[1.1] tracking-tight text-neutral-900 dark:text-neutral-100">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="inline-block bg-[linear-gradient(90deg,#f472b6,#fb923c,#facc15,#4ade80,#38bdf8,#a78bfa,#f472b6)] bg-[length:200%_auto] bg-clip-text font-normal text-transparent motion-safe:animate-gradient-x">
                  Hi
                </span>{" "}
                <span
                  className="inline-block origin-[70%_70%] motion-safe:animate-wave"
                  role="img"
                  aria-label="waving hand"
                >
                  👋
                </span>{" "}
                I&apos;m {personal.name}.
              </span>
              <span className="mt-3 block w-fit bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 bg-clip-text font-grotesk text-xl tracking-[0.1em] text-transparent sm:text-2xl md:text-3xl">
                {personal.displayRole}
              </span>
            </h1>

            {/* Concise Professional Positioning */}
            {/* w-0 min-w-full: wrap to the heading's width instead of widening the block */}
            <p className="mb-8 w-0 min-w-full text-balance text-lg font-light leading-relaxed text-[#525252] dark:text-neutral-400 sm:text-xl">
              Building scalable, high-performance products with React, Next.js, and TypeScript.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="btn-glass-dark group inline-flex items-center justify-center gap-2.5 px-7 py-3 text-[15px] font-light tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2"
              >
                <span>View Experience</span>
                <ArrowDown
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                  strokeWidth={1.5}
                />
              </a>

              <a
                href="#contact"
                className="btn-glass-light inline-flex items-center justify-center gap-2.5 px-7 py-3 text-[15px] font-light tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2"
              >
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 rounded-full text-[#737373] transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:text-neutral-500 dark:hover:text-white"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300/70 bg-white/50 backdrop-blur-sm motion-safe:animate-bounce dark:border-neutral-700 dark:bg-neutral-900/50">
          <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} />
        </span>
      </a>
    </section>
  );
}
