"use client";

import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type ViewTransitionDocument = Document & {
  startViewTransition?: (cb: () => void) => { ready: Promise<void> };
};

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const apply = useCallback((dark: boolean) => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      // ignore storage failures (private mode, etc.)
    }
    setIsDark(dark);
  }, []);

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains("dark");
    const doc = document as ViewTransitionDocument;

    if (!doc.startViewTransition) {
      apply(next);
      return;
    }

    // Going to light reveals left→right; going to dark reveals right→left.
    const clipPath = next
      ? ["inset(0 0 0 100%)", "inset(0 0 0 0)"]
      : ["inset(0 100% 0 0)", "inset(0 0 0 0)"];

    doc.startViewTransition(() => apply(next)).ready.then(() => {
      document.documentElement.animate(
        { clipPath },
        {
          duration: 550,
          easing: "cubic-bezier(0.83, 0, 0.17, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }, [apply]);

  // "d" toggles the theme, like the generated portfolio.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        e.key.toLowerCase() !== "d" ||
        e.repeat ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        target?.isContentEditable ||
        /^(INPUT|TEXTAREA|SELECT)$/.test(target?.tagName ?? "")
      ) {
        return;
      }
      toggle();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggle]);

  if (!mounted) {
    return (
      <div className="badge p-2">
        <div className="h-4 w-4" />
      </div>
    );
  }

  return (
    <button
      onClick={toggle}
      className="btn cursor-pointer p-2"
      aria-label="Toggle color theme"
      title="Toggle theme (d)"
    >
      {isDark ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
