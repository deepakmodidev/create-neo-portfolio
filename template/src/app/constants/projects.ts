// =============================================
// YOUR PROJECTS
// =============================================
// Each entry renders as a collapsible item on the home page and gets its own
// detail page at /projects/<slug>. Every field except name/tagline/description/
// tech/github is optional — delete what you don't need.
//
// Replace the placeholder images (/placeholder-image.png) with your own
// screenshots under public/projects/<your-project>/.

export const PROJECTS = [
  // =============================================
  // Project One
  // =============================================
  {
    name: "Project One",
    tagline: "A one-line description of what this project does.",
    overview:
      "Write the story behind this project — what problem it solves, why you built it, and what makes it interesting. This shows up when the project is expanded on the home page.",
    description:
      "A longer, more detailed description of the project. Cover the core idea, the main features, and the value it delivers to users. This text is used on the dedicated project page and in its metadata.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "shadcn/ui",
    ],
    link: "https://example.com",
    github: "https://github.com/your-github/project-one",
    images: {
      hero: "/placeholder-image.png",
      gallery: [
        {
          src: "/placeholder-image.png",
          alt: "Project One screenshot one",
          caption: "Describe what this screenshot shows.",
        },
        {
          src: "/placeholder-image.png",
          alt: "Project One screenshot two",
          caption: "Another short caption for context.",
        },
        {
          src: "/placeholder-image.png",
          alt: "Project One screenshot three",
          caption: "Captions are optional — remove them if you like.",
        },
        {
          src: "/placeholder-image.png",
          alt: "Project One screenshot four",
          caption: "Add as many gallery images as you need.",
        },
      ],
    },
    features: [
      "List a key feature of your project here",
      "Each item becomes a bullet on the project page",
      "Keep them short and benefit-focused",
      "Add or remove as many as you need",
      "Authentication and authorization",
      "Responsive, accessible UI",
    ],
    technicalDetails: [
      {
        title: "Architecture Highlight",
        description:
          "Explain an interesting technical decision — how you structured the app, a tricky integration, or a performance optimization you're proud of.",
      },
      {
        title: "Data Layer",
        description:
          "Describe how you handle data: the database, the ORM, caching strategy, and how you keep things fast and consistent.",
      },
      {
        title: "Another Detail",
        description:
          "Add as many technical detail blocks as you want. Each one renders as a titled paragraph on the project page.",
      },
    ],
    challenges: [
      {
        problem: "Describe a challenge you ran into while building this.",
        solution:
          "Explain how you solved it — the approach you took and why it worked.",
      },
      {
        problem: "Another problem worth highlighting.",
        solution:
          "The solution you landed on. These pairs show off your problem-solving.",
      },
    ],
    metrics: {
      users: "1,000+",
      uptime: "99.9%",
      loadTime: "< 1s",
      stars: "120+",
    },
  },

  // =============================================
  // Project Two
  // =============================================
  {
    name: "Project Two",
    tagline: "Another project with a short, punchy tagline.",
    overview:
      "A brief overview of your second project. Mention the inspiration and the core experience you wanted to create.",
    description:
      "A detailed description of Project Two covering its purpose, standout features, and the impact it had on the people who used it.",
    tech: ["React", "Vite", "Firebase", "Tailwind CSS", "Zustand"],
    link: "https://example.com",
    github: "https://github.com/your-github/project-two",
    images: {
      hero: "/placeholder-image.png",
      gallery: [
        {
          src: "/placeholder-image.png",
          alt: "Project Two screenshot one",
          caption: "Main dashboard view.",
        },
        {
          src: "/placeholder-image.png",
          alt: "Project Two screenshot two",
          caption: "A secondary view or feature.",
        },
      ],
    },
    features: [
      "A standout feature of this project",
      "Real-time updates and sync",
      "Clean, intuitive interface",
      "Works great on mobile",
    ],
    technicalDetails: [
      {
        title: "Real-Time Sync",
        description:
          "Describe how you implemented live updates and kept the UI in sync across clients.",
      },
      {
        title: "State Management",
        description:
          "Explain your approach to managing application state and why you chose it.",
      },
    ],
    challenges: [
      {
        problem: "A meaningful obstacle you overcame.",
        solution: "The technique or trade-off you used to get past it.",
      },
    ],
    // Optional: embed a YouTube demo video on the project page.
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },

  // =============================================
  // Project Three
  // =============================================
  {
    name: "Project Three",
    tagline: "A smaller side project or experiment.",
    overview:
      "Even small projects belong here. Briefly explain what you made and what you learned from it.",
    description:
      "A concise description of Project Three. Not every project needs metrics or a video — include only the sections that make sense.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "https://example.com",
    github: "https://github.com/your-github/project-three",
    images: {
      hero: "/placeholder-image.png",
      gallery: [
        {
          src: "/placeholder-image.png",
          alt: "Project Three screenshot",
          caption: "A look at the project in action.",
        },
      ],
    },
    features: [
      "Keep the feature list focused",
      "Highlight what makes it unique",
      "Quality over quantity",
    ],
    challenges: [
      {
        problem: "What was tricky about this one?",
        solution: "How you figured it out.",
      },
    ],
  },
];
