// =============================================
// EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS
// =============================================
// Almost everything on the site is driven from the constants below.
// Replace the placeholder values with your own details.

const DOMAIN = "yourdomain.com";
export const BASE_URL = `https://${DOMAIN}`;

export const ABOUT_ME = {
  name: "Your Name",
  title: "Full Stack Developer",
  location: "City, India",
  email: "you@example.com",
  description: [
    "Hey, there! I'm a developer who loves building products that people actually use. Write a couple of sentences here about who you are, what you do, and what you're currently working on.",
    "Use this space to talk about your experience, the kinds of problems you enjoy solving, and the technologies you reach for most often.",
    "Wrap up with what you're excited about right now — side projects, open source, or whatever you're learning next.",
  ],
  profileImage: "/placeholder-avatar.png",
  profileGif: "/placeholder-avatar.png",
};

export const USER_NAMES = {
  githubUsername: "your-github",
  linkedinUsername: "your-linkedin",
  twitterUsername: "your-twitter",
  peerlistUsername: "your-peerlist",
  instagramUsername: "your-instagram",
  // cal.com username + event slug used by the "schedule a meeting" button
  calUsername: "your-cal-username",
};

export const SOCIAL_LINKS = {
  github: `https://github.com/${USER_NAMES.githubUsername}`,
  linkedin: `https://linkedin.com/in/${USER_NAMES.linkedinUsername}`,
  peerlist: `https://peerlist.io/${USER_NAMES.peerlistUsername}`,
  twitter: `https://x.com/${USER_NAMES.twitterUsername}`,
  instagram: `https://instagram.com/${USER_NAMES.instagramUsername}`,
  resume: "/resume.pdf",
  email: `mailto:${ABOUT_ME.email}?subject=Message%20from%20Website&body=Hi!%20I%27m...`,
};

// Contact form submission endpoint (used by the "send a message" form).
// Create a free form at https://formspree.io/forms and paste your URL here.
export const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export { PROJECTS } from "./projects";

// Skill icons shown in the "technical skills" section.
// Make this YOUR tech stack: add the ones you use, remove the ones you don't.
// Each entry is a https://skillicons.dev slug — browse that site for all
// available icons (e.g. "docker", "aws", "go", "rust", "kubernetes", ...).
export const SKILLS = [
  // Frontend
  "html",
  "css",
  "js",
  "ts",
  "react",
  "nextjs",
  "vue",
  "nuxtjs",
  "tailwind",
  // Backend
  "nodejs",
  "express",
  "graphql",
  "prisma",
  // Databases
  "mongodb",
  "mysql",
  "postgresql",
  "firebase",
  "supabase",
  // Languages
  "c",
  "cpp",
  "java",
  "py",
  // Tools & DevOps
  "git",
  "github",
  "vscode",
  "postman",
  "vite",
  "npm",
  "figma",
  "md",
  // Cloud & Deployment
  "vercel",
  "githubactions",
];

export const EXPERIENCE = [
  {
    company: "Company One",
    companyLink: "https://example.com/",
    logo: "/placeholder-logo.png",
    role: "Software Developer",
    period: "Jan 2024 - Present",
    location: "City, Country",
    description:
      "Describe what you did here — the products you shipped, the impact you had, and the technologies you worked with. Keep it to two or three sentences focused on outcomes.",
    skills: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    company: "Company Two",
    companyLink: "https://example.com/",
    logo: "/placeholder-logo.png",
    role: "Frontend Developer Intern",
    period: "Jun 2023 - Dec 2023",
    location: "Remote",
    description:
      "Another role summary. Highlight a concrete achievement or two and the stack you used to deliver it.",
    skills: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Your University",
    institutionLink: "https://example.com/",
    period: "2021 - 2025",
    score: "8.5 CGPA",
  },
];

export const TESTIMONIALS = [
  {
    name: "Jane Doe",
    role: "CTO @ Company",
    content:
      "Add a short testimonial here. A couple of sentences from someone you've worked with about what it's like to collaborate with you works best.",
  },
  {
    name: "John Smith",
    role: "Founder @ Startup",
    content:
      "Another testimonial. Keep these genuine and specific — mention the work you did together and the value you brought.",
  },
  {
    name: "Alex Johnson",
    role: "Engineering Manager @ Agency",
    content:
      "A third testimonial. You can add or remove entries here; the section adapts to however many you provide.",
  },
];
