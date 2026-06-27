import CommandBlock from "../ui/command-block";
import SectionHeader from "../ui/section-header";

const steps = [
  {
    n: "1",
    title: "Create",
    description: "Scaffolds the project and installs every dependency.",
    command: "npx create-neo-portfolio",
  },
  {
    n: "2",
    title: "Run",
    description: "Start the dev server at localhost:3000.",
    command: "cd neo-portfolio && npm run dev",
  },
  {
    n: "3",
    title: "Customize",
    description: "Edit one file with your name, links, and projects.",
    command: "code src/app/constants/data.ts",
  },
];

const options = [
  { cmd: "create-neo-portfolio", note: "default setup", tag: "recommended" },
  { cmd: "create-neo-portfolio my-app", note: "custom project name" },
  { cmd: "create-neo-portfolio --help", note: "list all options" },
];

export default function GetStarted() {
  return (
    <section id="install">
      <SectionHeader
        title="get started"
        sub="Three commands from an empty folder to editing your own portfolio."
      />

      {/* Steps */}
      <div className="divide-y divide-dashed divide-border">
        {steps.map((step) => (
          <div key={step.n} className="p-4">
            <div className="flex items-start gap-3 sm:gap-4">
              <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center border border-border bg-muted text-lg font-semibold text-foreground">
                {step.n}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold sm:text-base">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
            <div className="mt-3">
              <CommandBlock command={step.command} />
            </div>
          </div>
        ))}
      </div>

      {/* Options + deploy */}
      <div className="grid divide-y divide-dashed divide-border border-t border-dashed border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <div className="p-4">
          <h3 className="mono mb-4 text-xs uppercase tracking-wider text-muted-foreground">
            command options
          </h3>
          <ul className="space-y-3">
            {options.map((opt) => (
              <li key={opt.cmd} className="flex items-baseline gap-3">
                <span className="mono select-none text-link">$</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="mono truncate text-[0.82rem] text-foreground">
                      {opt.cmd}
                    </span>
                    {opt.tag && (
                      <span className="ml-auto shrink-0 border border-border px-1.5 py-0.5 text-[0.6rem] uppercase tracking-wide text-link">
                        {opt.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {opt.note}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4">
          <h3 className="mono mb-4 text-xs uppercase tracking-wider text-muted-foreground">
            deploy
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Push to Vercel, Netlify, or any host that runs Next.js. Build for
            production with one command.
          </p>
          <div className="mt-4">
            <CommandBlock command="npm run build" />
          </div>
        </div>
      </div>
    </section>
  );
}
