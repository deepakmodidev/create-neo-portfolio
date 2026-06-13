"use client";

import React from "react";

interface CollapsibleGridProps extends React.HTMLAttributes<HTMLDivElement> {
  header: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function CollapsibleGrid({
  header,
  children,
  footer,
  isExpanded,
  onToggle,
  className = "",
  ...props
}: CollapsibleGridProps) {
  return (
    <div
      className={`relative group transition-colors duration-200 hover:bg-muted/30 ${className}`}
      {...props}
    >
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15" />

      <div className="p-4 cursor-pointer select-none" onClick={onToggle}>
        <div className="flex-1 min-w-0">{header}</div>

        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isExpanded
              ? "grid-rows-[1fr] opacity-100 mt-2"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pb-2">{children}</div>
          </div>
        </div>

        {footer && <div className="mt-1">{footer}</div>}
      </div>
    </div>
  );
}
