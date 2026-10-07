import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, badge, align = "left" }: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}`}
    >
      <div className={`mb-3 flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}>
        <span className="font-mono text-2xl font-light tracking-wider text-blue-600">
          {"|"} {title}
        </span>
        {badge && <span className="font-mono text-xs font-light text-[#737373]">· {badge}</span>}
      </div>
      <p className="mt-3 text-base leading-relaxed text-[#525252] sm:text-lg">{subtitle}</p>
    </div>
  );
}
