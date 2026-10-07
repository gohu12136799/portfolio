"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative border-t border-neutral-200/60 py-20 dark:border-neutral-800 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a question or want to work together? Drop me a message."
        />

        <div className="max-w-3xl">
          <div className="rounded-2xl border border-neutral-200/70 bg-neutral-100 p-8 dark:border-neutral-800 dark:bg-neutral-900/70 sm:p-10">
            {/* Email display and copy */}
            <div className="mb-8">
              <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-500">
                Direct Email
              </label>
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                <a
                  href={`mailto:${personal.email}`}
                  className="group flex flex-1 items-center justify-between rounded-full border border-neutral-200 bg-white px-5 py-2.5 font-mono text-sm text-neutral-800 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-700 sm:text-base"
                >
                  <span className="truncate">{personal.email}</span>
                  <ArrowUpRight className="ml-2 h-4 w-4 shrink-0 text-neutral-400 transition-colors group-hover:text-blue-500" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-600/90 px-5 py-2.5 font-mono text-xs font-light tracking-wide text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:ring-2 focus-visible:ring-blue-400/60"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-white" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-white" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow group flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-blue-300 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-500 transition-transform group-hover:scale-105">
                    <LinkedinIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-light text-neutral-800 transition-colors group-hover:text-blue-600 dark:text-neutral-200">
                      LinkedIn
                    </div>
                    <div className="font-mono text-xs text-neutral-500">/in/gohu</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-blue-500" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow group flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-4 transition-all hover:border-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-600"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 text-neutral-700 transition-transform group-hover:scale-105 dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-300">
                    <GithubIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-light text-neutral-800 transition-colors group-hover:text-neutral-950 dark:text-neutral-200">
                      GitHub
                    </div>
                    <div className="font-mono text-xs text-neutral-500">@gohu</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-neutral-800" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
