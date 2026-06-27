"use client";

import { ArrowUpRight, Github } from "lucide-react";
import CommandBlock from "../ui/command-block";

export default function Hero() {
  return (
    <section className="px-4 pb-10 pt-10 sm:pt-14">
      <span className="badge mono inline-flex items-center gap-2 px-2.5 py-1 text-xs text-muted-foreground">
        <span className="h-1.5 w-1.5 bg-link" />
        v1.2.1 · open source
      </span>

      <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
        Launch your developer portfolio in{" "}
        <span className="text-link">one command</span>.
      </h1>

      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        create-neo-portfolio scaffolds a clean, responsive portfolio with
        Next.js, Tailwind, and TypeScript. Add your details in one file and
        deploy - no config, no boilerplate.
      </p>

      <div className="mt-6 max-w-md">
        <CommandBlock />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2.5">
        <a
          href="https://create-neo-portfolio-template.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="btn no-link gap-1.5 px-4 py-2 text-sm"
        >
          See it live
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <a
          href="https://github.com/deepakmodidev/create-neo-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="badge no-link flex items-center gap-2 px-4 py-2 text-sm text-foreground"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
      </div>

    </section>
  );
}
