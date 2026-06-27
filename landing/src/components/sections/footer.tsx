import { Github, Package, Linkedin } from "lucide-react";

const links = [
  {
    href: "https://github.com/deepakmodidev/create-neo-portfolio",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.npmjs.com/package/create-neo-portfolio",
    label: "npm",
    icon: Package,
  },
  {
    href: "https://www.linkedin.com/in/deepakmodidev/",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="px-4 py-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-base font-semibold">
            neo<span className="text-link">.</span>portfolio
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            A developer portfolio, scaffolded in one command.
          </p>
        </div>

        <nav className="flex items-center gap-4" aria-label="Footer links">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mono mt-6 flex flex-col gap-1 border-t border-dashed border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>
          © 2026{" "}
          <a
            href="https://deepakmodi.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors"
          >
            deepakmodidev
          </a>{" "}
          · MIT licensed
        </span>
        <span>
          press <span className="text-foreground">d</span> to switch theme
        </span>
      </div>
    </footer>
  );
}
