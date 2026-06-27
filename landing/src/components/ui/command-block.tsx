"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CommandBlockProps {
  command?: string;
  className?: string;
}

export default function CommandBlock({
  command = "npx create-neo-portfolio",
  className = "",
}: CommandBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy command", err);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Command copied" : `Copy: ${command}`}
      className={`badge no-link group flex w-full items-center justify-between gap-3 px-4 py-2 text-left ${className}`}
    >
      <span className="mono flex min-w-0 items-center gap-2">
        <span aria-hidden className="select-none text-link">$</span>
        <span className="truncate text-foreground">{command}</span>
      </span>
      <span className="flex shrink-0 items-center gap-1.5 text-xs text-muted-foreground">
        {copied ? (
          <>
            <Check className="h-4 w-4 text-link" />
            <span className="mono hidden sm:inline text-link">copied</span>
          </>
        ) : (
          <>
            <Copy className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
            <span className="mono hidden sm:inline">copy</span>
          </>
        )}
      </span>
    </button>
  );
}
