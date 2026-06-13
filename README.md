# 🚀 Neo Portfolio CLI & Template

<p align="left">
  <a href="https://github.com/deepakmodidev/create-neo-portfolio/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/deepakmodidev/create-neo-portfolio?style=social" alt="GitHub stars" />
  </a>
  <a href="https://github.com/deepakmodidev/create-neo-portfolio/network/members" target="_blank">
    <img src="https://img.shields.io/github/forks/deepakmodidev/create-neo-portfolio?style=social" alt="GitHub forks" />
  </a>
  <a href="https://www.npmjs.com/package/create-neo-portfolio" target="_blank">
    <img src="https://img.shields.io/npm/v/create-neo-portfolio?color=cb3837&logo=npm" alt="NPM version" />
  </a>
  <a href="https://www.npmjs.com/package/create-neo-portfolio" target="_blank">
    <img src="https://img.shields.io/npm/dt/create-neo-portfolio?color=cb3837&logo=npm" alt="NPM downloads" />
  </a>
  <a href="./LICENSE" target="_blank">
    <img src="https://img.shields.io/npm/l/create-neo-portfolio?color=brightgreen" alt="License" />
  </a>
</p>

Create a modern, customizable developer portfolio in seconds — with a single command. Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. Zero config, no API keys, no environment variables — just edit one file and deploy.

<p align="center">
  <img src="./public/banner.webp" alt="Neo Portfolio CLI" width="700" />
</p>

🌐 [View the Landing Page](https://create-neo-portfolio.vercel.app/) &nbsp;•&nbsp; ✨ [See a live example](https://deepakmodidev.vercel.app)

---

## ⚡ Quick Start

```bash
# Interactive (prompts for a project name, default: neo-portfolio)
npx create-neo-portfolio

# Or pass the name directly
npx create-neo-portfolio my-portfolio
cd my-portfolio
npm run dev
```

The CLI scaffolds the project, installs dependencies, initializes a git repo, and you're ready to go. Open [http://localhost:3000](http://localhost:3000).

---

## 🎨 Make It Yours

Almost everything is driven from two files:

| What | Where |
| --- | --- |
| Name, title, bio, location, email, social usernames | `src/app/constants/data.ts` → `ABOUT_ME`, `USER_NAMES`, `SOCIAL_LINKS` |
| Skills (icon grid) | `src/app/constants/data.ts` → `SKILLS` ([skillicons.dev](https://skillicons.dev) slugs) |
| Experience, education, testimonials | `src/app/constants/data.ts` → `EXPERIENCE`, `EDUCATION`, `TESTIMONIALS` |
| Projects (+ their detail pages) | `src/app/constants/projects.ts` → `PROJECTS` |

Then:

- **Images** — replace the placeholders in `public/` and `src/app/opengraph-image.png` with your own.
- **Contact form** — set `CONTACT_FORM_ENDPOINT` in `data.ts` (free endpoint at [Formspree](https://formspree.io/forms)).
- **Meeting button** — set your cal.com handle in `data.ts` (`USER_NAMES.calUsername`).
- **Sections** — add, remove, or reorder them in `src/app/page.tsx`.

> Change your name in `data.ts` and it updates everywhere — navbar, metadata, JSON-LD, sitemap, and the GitHub contribution graph all follow automatically.

---

## ✨ Features

- **Modern stack** — Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + TypeScript
- **Zero config** — no environment variables or API keys required
- **Content-driven** — everything lives in `data.ts` / `projects.ts`
- **Dedicated project pages** — each project gets its own `/projects/<slug>` route
- **Live GitHub contribution graph** as a banner
- **Dark / light theme** with system preference + smooth toggle
- **SEO-ready** — metadata, JSON-LD, OpenGraph image, `sitemap.xml`, `robots.txt`
- **Polished details** — animated canvas cursor, glassy buttons, smooth scrolling
- **Fully responsive** and fast out of the box

---

## 🚀 Deploy

Deploy to [Vercel](https://vercel.com/import) (recommended) or any platform that supports Next.js — push to GitHub and import the repo.

---

## 🙌 Credits

Built by **[Deepak Modi](https://deepakmodidev.vercel.app)** with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/).

If this helped you, a ⭐ on the [repo](https://github.com/deepakmodidev/create-neo-portfolio) means a lot!

## 📄 License

[MIT](LICENSE)
