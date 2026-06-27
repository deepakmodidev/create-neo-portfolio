"use client";

import { Github } from "lucide-react";
import type Lenis from "@studio-freight/lenis";
import { useCallback } from "react";
import ThemeToggle from "../ui/theme-toggle";

const navItems = [
  { id: "features", label: "features" },
  { id: "install", label: "install" },
];

const getLenis = () => (window as typeof window & { lenis?: Lenis }).lenis;

export default function Header() {

  const scrollTop = useCallback(() => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <header>
      <div className="relative flex items-center justify-between gap-4 px-4 py-2">
        {/* Brand */}
        <button
          onClick={scrollTop}
          className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
        >
          neo<span className="text-link">.</span>portfolio
        </button>

        {/* Right */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/deepakmodidev/create-neo-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="btn no-link hidden px-3 py-2 text-sm sm:inline-flex"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.npmjs.com/package/create-neo-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="btn no-link hidden px-3 py-2 text-xs sm:inline-flex"
          >
            npm
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
