export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  keyProblemsSolved: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  category: "Marketplace & Web" | "Mini App" | "AI & Internal Tools" | "Mobile";
  description: string;
  role: string;
  techStack: string[];
  keyChallenges: string;
  keyContribution: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface TechStackCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: "Core Production" | "Experienced" | "Hands-on Exploration";
    context?: string;
  }[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
}

export interface PublicationItem {
  title: string;
  venue: string;
  detail: string;
}

export interface EngineeringStrength {
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  impact: string;
  tags: string[];
}

export const portfolioData = {
  personal: {
    name: "Huong Tran",
    displayRole: "Software Engineer",
    experienceYears: "4+",
    location: "Ho Chi Minh City, Vietnam",
    timezone: "UTC+7 (Indochina Time)",
    availability: "Available for new opportunities",
    openTo: "Software Engineer Roles • Remote / Hybrid",
    bio: "Software Engineer with 4+ years of experience building scalable web applications with React, Next.js, and TypeScript. Specializing in high-traffic marketplace architectures, large data rendering, and web performance optimization.",
    aboutDetailed: [
      "I have over 4 years of hands-on experience architecting and shipping production web applications. My primary work centers around the React, Next.js, and TypeScript ecosystem, where I build robust web products used by high volumes of daily active users.",
      "A significant portion of my career has been dedicated to high-traffic consumer marketplaces (specifically within the Chợ Tốt ecosystem), tackling real-world problems like virtualized feed rendering, deep URL-filter synchronization, bundle footprint minimization, and Core Web Vitals optimization.",
      "Beyond core web development, I have shipped mobile-first web applications within the Zalo Mini App ecosystem, developed enterprise AI-assisted internal tooling, and explored cross-platform mobile development with Flutter. I prioritize code maintainability, clean TypeScript typing, and accessible user experiences.",
    ],
    email: "huong.tranthithu12136799@gmail.com",
    github: "https://github.com/gohu12136799",
    linkedin: "https://www.linkedin.com/in/huong-tran-47296a368/",
    resumeUrl: "/resume",
    // Paths under /public for the fanned avatar cards: [front, back-left, back-right].
    // Leave an entry empty to show a gradient placeholder.
    avatars: ["", "", ""],
  },

  metrics: [
    { label: "Experience", value: "4+ Years", detail: "React, Next.js & TypeScript" },
    { label: "Product Scale", value: "High-Traffic", detail: "Marketplace & Listing Systems" },
    {
      label: "Focus Areas",
      value: "Performance & DX",
      detail: "Virtualization, SSR & Clean State",
    },
    { label: "Engineering Scope", value: "Web & Mini App", detail: "Web, Zalo Mini App & Flutter" },
  ],

  experiences: [
    {
      id: "chotot-marketplace",
      role: "Frontend Software Engineer",
      company: "Chợ Tốt (Carousell Group)",
      companyUrl: "https://www.chotot.com",
      location: "Ho Chi Minh City, Vietnam",
      period: "Oct 2025 — Jun 2026",
      type: "Full-time",
      summary:
        "Responsible for high-traffic marketplace surfaces, including product listing, search, category browsing, and detail experiences serving millions of active users.",
      keyProblemsSolved: [
        "Architected and optimized high-density listing pages handling thousands of item cards by implementing list virtualization, preventing memory spikes and eliminating scroll jank.",
        "Built a resilient multi-parameter search and filter system with bidirectional URL state synchronization, ensuring shareable URLs, accurate browser history navigation.",
        "Improved frontend performance across high-traffic pages by optimizing rendering, image loading, and JavaScript bundles, with Core Web Vitals used to identify and measure performance improvements.",
        "AI-assisted development from Figma and structured requirements, reducing implementation time by 70%.",
        "Collaborated actively in cross-functional Agile/Scrum sprints with product managers, UX designers, backend engineers, and QA to consistently deliver performant features on schedule.",
      ],
      techStack: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Jotai",
        "TanStack Query",
        "REST APIs",
        "micro-frontend",
        "Web Performance",
        "cross-browser compatibility",
        "Agile / Scrum",
      ],
    },
    {
      id: "VNG-corporation",
      role: "Frontend Software Engineer",
      company: "VNG Corporation",
      location: "Ho Chi Minh City, Vietnam",
      period: "Oct 2022 — Mar 2025",
      type: "Full-time",
      summary:
        "Worked across an internal AI platform and a food marketplace built on Zalo Mini App, focusing on frontend development, API integration, real-time communication, and data visualization.",
      keyProblemsSolved: [
        "Built reusable frontend components and workflows for AI-powered services including OCR, Chatbot, and image generation.",
        "Developed a food marketplace with product management, ordering, authentication, payment, and real-time notification flows using Zalo Mini App APIs.",
        "Integrated and optimized frontend architecture using state management, responsive UI patterns, and reusable components across multiple product modules.",
      ],
      techStack: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Zalo Mini App SDK",
        "Zustand",
        "Tailwind CSS",
        "Next Auth",
        "Chart.js",
        "i18n",
        "REST APIs",
        "Socket",
      ],
    },
    {
      id: "Tour-guide-platform",
      role: "Frontend Developer",
      company: "ExecutionLab",
      location: "Ho Chi Minh City, Vietnam",
      period: "Oct 2021 - Oct 2022",
      type: "Full-time",
      summary:
        "Worked on web and mobile experiences for a tour guide platform, focusing on responsive UI development and reusable frontend components.",
      keyProblemsSolved: [
        "Developed responsive web and mobile interfaces for tour guide workflows",
        "Built reusable landing pages, form systems, and image upload/cropping features",
        "Ensured consistent user experiences across devices and screen sizes.",
      ],
      techStack: ["Next.js, React, TypeScript, Redux, SCSS"],
    },
    {
      id: "datamart-vietnam",
      role: "Frontend Developer",
      company: "DataMart Vietnam",
      location: "Ho Chi Minh City, Vietnam",
      period: "May 2019 - Nov 2020",
      type: "Full-time",
      summary:
        "Worked on an e-commerce management platform, contributing to both frontend development and backend implementation for internal admin tool.",
      keyProblemsSolved: [
        "Developed responsive web interfaces for e-commerce workflows across desktop, tablet, and mobile devices.",
        "Built CRUD features and business workflows for the e-commerce management system.",
        "Implemented backend functionality using Laravel/PHP, including data processing and MySQL integration.",
        "Worked across frontend and backend layers to deliver features and resolve functional issues based on QA feedback.",
      ],
      techStack: ["HTML, CSS, jQuery, Bootstrap, Laravel (PHP/MVC), MySQL"],
    },
  ] as ExperienceItem[],

  projects: [
    {
      id: "chotot-marketplace-web",
      name: "Chợ Tốt Marketplace Web Experience",
      subtitle: "High-Traffic Listing, Search & Categorization Engine",
      category: "Marketplace & Web",
      description:
        "A high-traffic marketplace web platform helping users quickly discover relevant listings through fast search, category browsing, recent search history, and rich item detail experiences.",
      role: "Frontend Software Engineer",
      techStack: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "REST APIs, Redux, Jotai, TanStack Query, micro-frontend, GA4, core web vitals, cross-browser compatibility, agile / scrum",
      ],
      keyChallenges:
        "Quickly adapted to a complex micro-frontend ecosystem and 10+ additional codebases and service dependencies, while delivering an AI-powered home decoration experience and reward system within 2 months.",
      keyContribution:
        "Built core buyer experience features end-to-end, including keyword detection, search intent, relevant product discovery, and detail experiences, collaborating with stakeholders to continuously improve the buyer journey.",
      highlights: [
        "Keyword detection",
        "AI-powered Dream Home",
        "GA4 analytics & user behavior tracking",
        "Intent-based Product Recommendations",
      ],
      liveUrl: "https://www.chotot.com",
      featured: true,
    },
    {
      id: "brain-rush-flutter",
      name: "Brain Rush Mobile Puzzle Game",
      subtitle: "Puzzle Game",
      category: "Mobile Android",
      description:
        "A cross-platform mobile puzzle game built with Flutter and Dart, challenging cognitive agility through dynamic pattern puzzles and timed challenges.",
      role: "Mobile Developer (Personal Exploration)",
      techStack: [
        "Flutter",
        "Dart",
        "Firebase Authentication",
        "Cloud Firestore",
        "flutter_localizations",
        "intl",
      ],
      keyChallenges:
        "Independently conceived and built my first mobile game end-to-end, creating custom skills and requirements to guide AI-assisted development from architecture to implementation.",
      keyContribution:
        "Owned the end-to-end development of the game, including architecture, UI/UX, gameplay logic, scoring, timers, authentication, score persistence, character and skin customization, and cross-platform implementation with Flutter.",
      highlights: [
        "First mobile product built end-to-end",
        "AI-assisted development workflow",
        "Complete game experience",
      ],
      githubUrl: "https://github.com/gohu12136799/assignment-day",
      featured: true,
    },
  ] as ProjectItem[],

  techStack: [
    {
      title: "Frontend Core",
      description: "Primary foundation for building scalable, type-safe web applications.",
      skills: [
        {
          name: "React.js",
          level: "Core Production",
          context: "Component architecture, hooks, lifecycle, custom hooks",
        },
        {
          name: "Next.js",
          level: "Core Production",
          context: "App Router, SSR, SSG/ISR, API routes, routing",
        },
        {
          name: "TypeScript",
          level: "Core Production",
          context: "Strict typing, generics, interfaces, discriminated unions",
        },
        {
          name: "JavaScript (ES6+)",
          level: "Core Production",
          context: "Async/await, event loop, closures, DOM manipulation",
        },
        {
          name: "HTML5 & Semantic Web",
          level: "Core Production",
          context: "Accessibility, semantic landmarks, SEO structures",
        },
        {
          name: "CSS3 / Modern CSS",
          level: "Core Production",
          context: "Flexbox, Grid, CSS variables, responsive design",
        },
        {
          name: "Zustand",
          level: "Core Production",
          context: "Lightweight centralized state, middleware, persistence",
        },
        {
          name: "Jotai",
          level: "Experienced",
          context: "Atomic state, derived atoms, fine-grained re-renders",
        },
        {
          name: "TanStack Query",
          level: "Core Production",
          context: "Server-state caching, background refetching, optimistic updates",
        },
        {
          name: "Tailwind CSS",
          level: "Core Production",
          context: "Design token systems, responsive utilities, custom plugins",
        },
        {
          name: "Ant Design",
          level: "Core Production",
          context: "Enterprise data tables, complex forms, admin interfaces",
        },
        {
          name: "Micro-frontend",
          level: "Experienced",
          context: "Splitting large apps into independently deployable modules",
        },
      ],
    },
    {
      title: "Backend & Integration",
      description: "Reliable client-server communication, authentication, and data contracts.",
      skills: [
        {
          name: "REST APIs",
          level: "Core Production",
          context: "Contract adherence, error handling, pagination, retry policies",
        },
        {
          name: "Authentication / Authz",
          level: "Core Production",
          context: "JWT tokens, refresh cycles, RBAC, route protection",
        },
        {
          name: "Firebase",
          level: "Experienced",
          context: "Firebase Auth, Firestore, push notifications",
        },
        {
          name: "Python + Flask",
          level: "Experienced",
          context: "Scripting, automation, backend services",
        },
      ],
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile application development and mini-app runtimes.",
      skills: [
        {
          name: "Flutter",
          level: "Hands-on Exploration",
          context: "Widget trees, state management, animations",
        },
        {
          name: "Dart",
          level: "Hands-on Exploration",
          context: "Object-oriented modeling, asynchronous streams",
        },
        {
          name: "Zalo Mini App SDK",
          level: "Core Production",
          context: "Platform bridge APIs, bundle constraints, webview tuning",
        },
      ],
    },
    {
      title: "AI Integration & Tooling",
      description:
        "Practical integration of AI services, developer tooling, and practices ensuring code quality and collaboration.",
      skills: [
        {
          name: "AI Integration",
          level: "Experienced",
          context: "Streaming LLM responses, prompt tooling, markdown renderers",
        },
        {
          name: "AI-Assisted Dev (cursor, claude, antigravity, chatgpt)",
          level: "Core Production",
          context: "Cursor, Claude, Copilot workflows for rapid iteration",
        },
        {
          name: "Git & Version Control",
          level: "Core Production",
          context: "Branching strategies, PR reviews, merge conflict resolution",
        },
        {
          name: "Agile / Scrum",
          level: "Core Production",
          context: "Bi-weekly sprints, estimations, standups, retrospectives",
        },
        {
          name: "CI / CD Pipelines",
          level: "Experienced",
          context: "GitHub Actions, automated linting, build validation",
        },
      ],
    },
  ] as TechStackCategory[],

  education: [
    {
      school:
        "University of Information Technology, Vietnam National University - Ho Chi Minh City",
      degree: "Master of Computer Science",
      period: "2023 - 2027",
    },
    {
      school:
        "University of Information Technology, Vietnam National University - Ho Chi Minh City",
      degree: "Bachelor of Information Systems",
      period: "2015 - 2020",
    },
  ] as EducationItem[],

  publications: [
    {
      title: "Extracting Core Meaning from Legal Queries Using Semantic Technologies",
      venue: "SOMET 2025",
      detail:
        "Accepted for presentation at the 24th SOMET conference, May 2025, Kitakyushu, Japan.",
    },
    {
      title: "LLM-based Solution for Dataset Construction and Knowledge Retrieval Support",
      venue: "GOODTECHS 2025",
      detail:
        "Accepted for presentation at the 11th EAI International Conference on Smart Objects and Technologies for Social Good.",
    },
  ] as PublicationItem[],

  engineeringStrengths: [
    {
      title: "Frontend Architecture",
      summary:
        "Designing scalable, decoupled frontend codebases that remain maintainable as teams and features grow.",
      challenge:
        "Preventing tight coupling between presentation UI, server contracts, and local state.",
      approach:
        "Enforce strict separation between pure presentational components, container hooks, and typed API data services.",
      impact:
        "Significantly reduces code duplication, simplifies refactoring, and accelerates onboarding for new engineers.",
      tags: ["Component Modularity", "Custom Hooks", "Clean Architecture", "Type Safety"],
    },
    {
      title: "Performance Optimization",
      summary:
        "Systematic profiling and elimination of bottlenecks across network transfer and browser runtime.",
      challenge:
        "Slow First Contentful Paint (FCP) and Cumulative Layout Shift (CLS) on media-heavy marketplace pages.",
      approach:
        "Implement Next.js image optimization with reserved aspect ratio skeletons, route-based code splitting, and bundle analysis.",
      impact:
        "Boosted Core Web Vitals scores and reduced perceived page load latency across variable network conditions.",
      tags: ["Core Web Vitals", "LCP / CLS / INP", "Code Splitting", "Bundle Optimization"],
    },
    {
      title: "Large List & Data Rendering",
      summary:
        "Rendering thousands of dynamic items smoothly without degrading device memory or frame rates.",
      challenge:
        "Rendering deep infinite-scroll listing feeds causing thousands of DOM nodes and scroll sluggishness.",
      approach:
        "Utilize DOM virtualization (windowing) so only items within the visible viewport (plus overscan buffer) are rendered.",
      impact:
        "Maintained consistent 60fps scrolling and capped memory usage regardless of feed depth.",
      tags: ["DOM Virtualization", "Windowing", "Scroll Debounce", "Memoization"],
    },
    {
      title: "Search & Filtering Systems",
      summary:
        "Building fast, ergonomic search and filter experiences that preserve browser state accurately.",
      challenge:
        "State desynchronization between UI controls, search parameters, and browser navigation history.",
      approach:
        "Synchronize filter inputs with URL query parameters via pushState/replaceState with debounced inputs and serialized params.",
      impact:
        "Enables shareable URLs, accurate back/forward navigation, and seamless state restoration on refresh.",
      tags: ["URL State Sync", "Debounced Search", "Faceted Navigation", "History API"],
    },
    {
      title: "Responsive UI & Cross-Device Tuning",
      summary:
        "Crafting fluid layouts that deliver consistent utility and elegance on any viewport width.",
      challenge:
        "Maintaining visual hierarchy and touch targets when complex desktop data tables adapt to compact mobile screens.",
      approach:
        "Employ mobile-first flexbox and grid compositions, fluid typography clamps, and viewport-aware interactive drawers.",
      impact:
        "Eliminates horizontal scrolling bugs and delivers accessible, touch-friendly interactions across devices.",
      tags: ["Mobile-First", "Fluid Layouts", "Touch Targets", "Adaptive Tables"],
    },
    {
      title: "API Integration & Resilient Data Fetching",
      summary:
        "Establishing robust data contracts between client applications and backend REST endpoints.",
      challenge:
        "Handling network flakiness, rate limits, schema discrepancies, and race conditions gracefully.",
      approach:
        "Implement typed API clients with centralized error handling, exponential backoff retries, and optimistic UI updates.",
      impact:
        "Ensures transparent error recovery, graceful degradation, and immediate user feedback during mutations.",
      tags: ["RESTful Contracts", "Optimistic Updates", "Error Boundaries", "Retry Logic"],
    },
    {
      title: "Authentication & Authorization (RBAC)",
      summary:
        "Securing frontend routes and managing user permissions with predictable state flows.",
      challenge:
        "Preventing unauthorized access flashes and managing token expiration seamlessly without breaking user flow.",
      approach:
        "Architect centralized auth state guards with silent token refresh interceptors and role-based component gatekeepers.",
      impact:
        "Guarantees secure route transitions, reliable session persistence, and zero unauthorized data exposure in the UI.",
      tags: ["JWT / Cookies", "Role-Based Access", "Route Guards", "Token Refresh"],
    },
    {
      title: "Reusable UI Patterns & Design Systems",
      summary:
        "Creating cohesive, accessible component libraries that align engineering and design teams.",
      challenge:
        "Inconsistent styling, ad-hoc button and modal implementations, and accessibility oversights across squads.",
      approach:
        "Author headless, accessible primitives styled with design tokens, strict prop contracts, and clear usage guidelines.",
      impact:
        "Accelerates feature velocity across squads and maintains uniform design language and keyboard accessibility.",
      tags: ["Design Tokens", "Compound Components", "ARIA Accessibility", "Documentation"],
    },
    {
      title: "Cross-Functional Collaboration & Agile Delivery",
      summary:
        "Partnering closely with product, design, backend, and QA to build pragmatic, user-centric software.",
      challenge:
        "Misaligned requirements or late discovery of backend contract limitations near release deadlines.",
      approach:
        "Participate early in technical grooming, define API schemas collaboratively via mock servers, and demo sprint increments.",
      impact:
        "Fosters predictable sprint velocity, minimizes rework, and produces polished products that meet business goals.",
      tags: ["Agile / Scrum", "Sprint Planning", "API Contract Review", "Peer Reviews"],
    },
  ] as EngineeringStrength[],
};
