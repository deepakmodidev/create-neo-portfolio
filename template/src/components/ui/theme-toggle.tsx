"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

  useEffect(() => setMounted(true), []);

  const animateTheme = () => {
    // @ts-ignore
    if (!document.startViewTransition) return setTheme(nextTheme);

    const isDark = resolvedTheme === "dark";
    const clipPath = isDark
      ? ["inset(0 100% 0 0)", "inset(0 0 0 0)"] // L -> R when going to light
      : ["inset(0 0 0 100%)", "inset(0 0 0 0)"]; // R -> L when going to dark

    // @ts-ignore
    document
      .startViewTransition(() => setTheme(nextTheme))
      .ready.then(() => {
        document.documentElement.animate(
          {
            clipPath,
          },
          {
            duration: 550,
            easing: "cubic-bezier(0.83, 0, 0.17, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });
  };

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

      animateTheme();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [nextTheme, setTheme]);

  if (!mounted)
    return (
      <div className="p-2 text-sm badge">
        <div className="w-4 h-4" />
      </div>
    );

  return (
    <button
      ref={buttonRef}
      className="p-2 text-sm badge cursor-pointer"
      onClick={() => animateTheme()}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <FiMoon size={16} /> : <FiSun size={16} />}
    </button>
  );
}
