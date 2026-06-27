import {
  Terminal,
  FileCode2,
  MonitorSmartphone,
  SunMoon,
  Palette,
  SlidersHorizontal,
} from "lucide-react";
import SectionHeader from "../ui/section-header";

const features = [
  {
    icon: Terminal,
    title: "One-command setup",
    description: "Scaffold and install everything with a single npx command.",
  },
  {
    icon: FileCode2,
    title: "TypeScript-ready",
    description: "Fully typed, so autocomplete and refactors just work.",
  },
  {
    icon: MonitorSmartphone,
    title: "Fully responsive",
    description: "Reads well on phones, tablets, and large displays.",
  },
  {
    icon: SunMoon,
    title: "Dark & light themes",
    description: "Theme switching with system-preference detection built in.",
  },
  {
    icon: Palette,
    title: "Modern design system",
    description: "Tailwind v4 tokens and a consistent component set.",
  },
  {
    icon: SlidersHorizontal,
    title: "Yours to customize",
    description: "Swap content and sections without fighting the setup.",
  },
];

export default function Features() {
  return (
    <section id="features">
      <SectionHeader
        title="what you get"
        sub="A complete starting point, not a blank canvas."
      />

      <div className="divide-y divide-dashed divide-border">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="flex items-start gap-4 p-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-muted border border-border text-foreground">
                <Icon className="h-6 w-6" strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <h3 className="font-medium">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {f.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
