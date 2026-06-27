import { ArrowUpRight } from "lucide-react";
import CommandBlock from "../ui/command-block";

export default function CTASection() {
  return (
    <section className="px-4 py-14 text-center sm:py-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        Your portfolio is one command away
      </h2>
      <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:text-base">
        No signup, no template gallery. Run it and start editing.
      </p>

      <div className="mx-auto mt-6 max-w-md">
        <CommandBlock />
      </div>

      <a
        href="https://deepakmodi.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="mono mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground"
      >
        see a live example
        <ArrowUpRight className="h-4 w-4" />
      </a>
    </section>
  );
}
