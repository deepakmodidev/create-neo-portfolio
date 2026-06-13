# 🚀 My Developer Portfolio

This portfolio was created using the **[Neo Portfolio CLI](https://github.com/deepakmodidev/create-neo-portfolio)**, built and maintained by **[Deepak Modi](https://deepakmodidev.vercel.app)**.

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4** — fast, responsive, dark/light themed, and SEO-ready. No environment variables or API keys required.

---

## ✨ Make It Yours

Almost everything is driven from two files — edit these first:

| What | Where |
| --- | --- |
| Name, title, bio, location, email, social usernames | `src/app/constants/data.ts` → `ABOUT_ME`, `USER_NAMES`, `SOCIAL_LINKS` |
| Skills (icon grid) | `src/app/constants/data.ts` → `SKILLS` ([skillicons.dev](https://skillicons.dev) slugs) |
| Experience, education, testimonials | `src/app/constants/data.ts` → `EXPERIENCE`, `EDUCATION`, `TESTIMONIALS` |
| Projects (+ their detail pages) | `src/app/constants/projects.ts` → `PROJECTS` |

Then:

- **Images** — replace the placeholders in `public/` (your `placeholder-avatar.png`, project screenshots, `src/app/opengraph-image.png`).
- **Contact form** — set `CONTACT_FORM_ENDPOINT` in `src/app/constants/data.ts`. Create a free one at [Formspree](https://formspree.io/forms).
- **Meeting button** — set your cal.com handle in `data.ts` (`USER_NAMES.calUsername`).
- **Sections** — add, remove, or reorder sections in `src/app/page.tsx`.

> The GitHub contribution graph, project pages, sitemap, and robots all update automatically from the values above — no extra config needed.

---

## 🛠 Run Locally

```bash
npm install   # not needed if you scaffolded with the CLI
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deploy

Deploy to [Vercel](https://vercel.com/import) (recommended) or any platform that supports Next.js — just push to GitHub and import the repo.

---

## 🙌 Credits

Created with ❤️ using the **[Neo Portfolio CLI](https://github.com/deepakmodidev/create-neo-portfolio)** by [Deepak Modi](https://deepakmodidev.vercel.app).

If you build something with it, a ⭐ on the repo is appreciated!
