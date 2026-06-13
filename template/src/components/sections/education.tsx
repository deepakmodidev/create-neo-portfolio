import { EDUCATION } from "@/app/constants/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Education() {
  return (
    <section id="education">
      <div className="flex items-center py-2 px-4 border-b border-dashed border-border">
        <h2 className="text-2xl font-semibold flex items-center">education.</h2>
      </div>
      <div className="divide-y divide-dashed divide-border">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="space-y-1 p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="font-medium text-base">{edu.degree}</h3>
              <span className="text-sm text-muted-foreground font-mono">
                {edu.period}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              <Link
                href={edu.institutionLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {edu.institution}
                <ArrowUpRight className="inline-block w-4 h-4 ml-1" />
              </Link>
            </p>
            <p className="text-sm text-muted-foreground">Score: {edu.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
