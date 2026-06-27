import SectionHeader from "../ui/section-header";

const sections = [
  "Profile",
  "About",
  "Experience",
  "Education",
  "Projects",
  "Skills",
  "Testimonials",
  "Contact form",
  "GitHub activity",
];

const stack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind v4",
  "next-themes",
  "Lenis",
];

export default function Dependencies() {
  return (
    <section>
      <SectionHeader
        title="what's inside"
        sub="Everything a portfolio needs, ready to fill in."
      />

      <div className="divide-y divide-dashed divide-border">
        <div className="p-4">
          <h3 className="mono mb-3 text-xs uppercase tracking-wider text-muted-foreground">
            sections
          </h3>
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <span key={s} className="badge px-3 py-1.5 text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4">
          <h3 className="mono mb-3 text-xs uppercase tracking-wider text-muted-foreground">
            built on
          </h3>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="badge px-3 py-1.5 text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
