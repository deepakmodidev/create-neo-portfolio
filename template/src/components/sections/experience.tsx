"use client";

import { EXPERIENCE } from "@/app/constants/data";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import CollapsibleGrid from "@/components/ui/collapsible-grid";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="experience">
      <div className="flex items-center py-2 px-4 border-b border-dashed border-border">
        <h2 className="text-2xl font-semibold flex items-center">
          work experience.
        </h2>
      </div>

      <div className="relative divide-y divide-dashed divide-border">
        {EXPERIENCE.map((exp, index) => (
          <CollapsibleGrid
            key={`${exp.role}-${exp.company}`}
            isExpanded={activeIndex === index}
            onToggle={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
            header={
              <div className="flex items-center gap-3">
                {exp.logo && (
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl border border-border overflow-hidden bg-background">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="flex-1 min-w-0 space-y-0.5">
                  <h3 className="font-medium text-base leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    <Link
                      href={exp.companyLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      @ {exp.company}
                      <ArrowUpRight className="inline-block w-4 h-4 ml-1 align-text-bottom text-muted-foreground" />
                    </Link>
                  </p>
                </div>

                <div className="hidden sm:flex flex-col text-right font-mono text-sm text-muted-foreground">
                  <span>{exp.period}</span>
                  <span>{exp.location}</span>
                </div>
              </div>
            }
          >
            {/* Collapsible Details */}
            <div className="space-y-3">
              {/* Mobile-only Period/Location (visible inside collapsible) */}
              <div className="flex flex-col sm:hidden mb-2 text-left">
                <span className="text-sm text-muted-foreground font-mono">
                  {exp.period} • {exp.location}
                </span>
              </div>

              <p className="text-sm text-muted-foreground text-justify leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs badge text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </CollapsibleGrid>
        ))}
      </div>
    </section>
  );
}
