import { cldImage } from '../utils/cloudinary';

export type ProjectStack = {
  frontend?: string[];
  backend?: string[];
  images?: string[];
  auth?: string[];
  hosting?: string[];
  testing?: string[];
  tooling?: string[];
  apis?: string[];
  state?: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  overview?: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  // ✅ new
  role?: string;
  year?: number;
  highlights?: string[];
  features?: string[];
  challenges?: string[];
  nextSteps?: string[];
  images?: string[]; // screenshot URLs

  stack?: ProjectStack;
};

export const projects: Project[] = [
  {
    slug: 'photography-portfolio',
    title: 'Thomas Woroniak Photography',
    description:
      'A photography portfolio using React, React Router, TypeScript, Cloudinary, and TailwindCSS.',
    tags: ['React', 'TypeScript', 'React-Router', 'Cloudinary', 'TailwindCSS'],
    repoUrl: 'https://github.com/tworoniak/photography-portfolio',
    liveUrl: 'https://photography-portfolio-iota-eight.vercel.app',
    role: 'Design + Frontend Engineering',
    year: 2026,
    overview:
      'I built a modern photography portfolio designed to showcase concert and editorial work with fast navigation, clean gallery layouts, and Cloudinary-powered image delivery. The goal was to create a scalable structure where new galleries can be added easily while keeping performance and visual presentation as the priority.',
    highlights: [
      'Multi-page routing with React Router for clean navigation between galleries',
      'Cloudinary image delivery with dynamic resizing for fast load performance',
      'Reusable gallery and lightbox components for consistent UI patterns',
      'Responsive layout optimized for mobile and desktop viewing',
      'Styled with TailwindCSS for rapid iteration and maintainable design consistency',
    ],

    features: [
      'Homepage featuring curated featured images and galleries',
      'Dedicated gallery pages with grid layout and filtering-ready structure',
      'Lightbox modal with next/previous navigation and keyboard support',
      'Cloudinary-powered responsive images (auto quality + format)',
      'Reusable UI components (cards, navigation, layout sections)',
    ],

    challenges: [
      'Designing a gallery UI that feels modern while keeping image focus as the priority',
      'Managing routing and navigation state cleanly between multiple gallery pages',
      'Optimizing image loading while preserving visual quality across screen sizes',
      'Building reusable components to avoid duplication across gallery views',
    ],

    nextSteps: [
      'Add category/tag filtering and search for galleries',
      'Add pagination or lazy-loading for large photo sets',
      'Improve SEO with structured metadata and Open Graph tags',
      'Add CMS-driven content (or JSON-based config) for easier updates',
      'Add analytics tracking to measure engagement and gallery performance',
    ],
    stack: {
      frontend: [
        'React',
        'TypeScript',
        'React Router',
        'TailwindCSS',
        'Framer Motion',
      ],
      images: ['Cloudinary'],
      hosting: ['Vercel'],
      tooling: ['Vite', 'ESLint'],
    },
    images: [
      // add screenshot URLs when ready (Cloudinary or /public)
      // "https://.../screenshot1.png",
      cldImage('photo-portfolio-01_pdu39e'),
      cldImage('photo-portfolio-02_imyo85'),
      cldImage('photo-portfolio-03_rc5vf7'),
      cldImage('photo-portfolio-04_ujvpoa'),
    ],
  },

  {
    slug: 'dev-portfolio',
    title: 'Frontend Developer Portfolio',
    description: 'Neon/cyber portfolio with animated UI + fast routing.',
    tags: [
      'React',
      'React-Router',
      'TypeScript',
      'TailwindCSS',
      'Framer Motion',
    ],
    repoUrl: 'https://github.com/tworoniak/dev-portfolio',
    liveUrl: 'https://dev-portfolio-nu-two.vercel.app',
    role: 'Design + Frontend Engineering',
    year: 2026,

    overview:
      'I built a modern frontend developer portfolio to showcase my work through clean project case studies, animated UI transitions, and a bold neon-inspired design system. The goal was to create a fast, responsive site that highlights both technical skill and visual polish, while keeping the codebase scalable for adding future projects and content.',

    highlights: [
      'Multi-page portfolio built with React Router and clean route structure',
      'Neon/cyber UI styling with TailwindCSS and Framer Motion animations',
      'Dynamic project detail pages driven by reusable data models',
      'Responsive layout optimized for mobile-first viewing and modern browsers',
      'Component-based architecture designed for maintainability and scalability',
    ],

    features: [
      'Homepage hero section with animated intro and featured project grid',
      'Projects page with search + tag filtering for fast discovery',
      'Project detail pages with structured case study sections (overview, highlights, stack, next steps)',
      'Screenshot gallery with lightbox modal, keyboard navigation, and swipe support',
      'Reusable layout system with animated page transitions and consistent navigation',
    ],

    challenges: [
      'Creating smooth page transitions without flicker while maintaining performance',
      'Designing a bold visual identity that still feels professional and readable',
      'Structuring project data so detail pages render dynamically and remain easy to update',
      'Balancing animation polish with accessibility and usability best practices',
    ],

    nextSteps: [
      'Add MDX support for long-form project case studies and blog posts',
      'Add dark/light theme toggle with persisted user preference',
      'Improve SEO with Open Graph tags, sitemap generation, and metadata per project',
      'Add analytics tracking to measure project engagement and traffic sources',
      'Implement lazy-loading and image optimization for screenshots and thumbnails',
    ],

    stack: {
      frontend: [
        'React',
        'TypeScript',
        'React Router',
        'TailwindCSS',
        'Framer Motion',
      ],
      hosting: ['Vercel'],
      tooling: ['Vite', 'ESLint', 'Prettier'],
    },

    images: [
      // add screenshot URLs when ready (Cloudinary or /public)
      // "https://.../screenshot1.png",
      cldImage('dev-portfolio-01_wbzxhx'),
      cldImage('dev-portfolio-02_wfchre'),
      cldImage('dev-portfolio-03_vtovl9'),
      cldImage('dev-portfolio-04_gukrsd'),
    ],
  },
  {
    slug: 'job-tracker',
    title: 'Job Tracker (Kanban + Analytics)',
    description:
      'A local-first job application tracker built with React and TypeScript, featuring a sortable Kanban workflow, structured form validation, and filtering for managing an active job search pipeline.',
    overview:
      'Job Tracker is a productivity-focused web app designed to manage job applications through a Kanban-style workflow. Users can create, edit, and organize applications across pipeline stages (Applied, Interview, Offer, Rejected), drag and reorder cards with smooth interactions, and filter results by status, work mode, and keyword search. The project emphasizes scalable state structure, clean UI patterns, and strong TypeScript safety.',

    tags: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Vite',
      'dnd-kit',
      'React Hook Form',
      'Zod',
      'LocalStorage',
    ],

    repoUrl: 'https://github.com/tworoniak/job-tracker',
    liveUrl: 'https://job-tracker-teal-three.vercel.app',

    role: 'Frontend Engineering',
    year: 2026,

    highlights: [
      'Built a sortable Kanban board using dnd-kit with cross-column drag/drop and persistent ordering',
      'Implemented form validation and type-safe inputs using React Hook Form + Zod',
      'Designed a local-first persistence layer with LocalStorage + schema-based migration strategy',
      'Added a filtering system (search + status + work mode) without breaking Kanban ordering logic',
      'Structured application state for scalability using normalized records and column-based ordering',
    ],

    features: [
      'Kanban board workflow: Applied / Interview / Offer / Rejected',
      'Drag-and-drop card sorting within columns',
      'Cross-column drag/drop with automatic state updates',
      'Add/edit modal form with validation',
      'LocalStorage persistence (local-first)',
      'Keyword search by company or role',
      'Filters by pipeline status and work mode (remote/hybrid/onsite)',
      'Tech stack tagging system for each application',
      'External job link support for quick access',
    ],

    challenges: [
      'Designing drag-and-drop logic that supports both reordering within columns and moving between columns',
      'Maintaining consistent ordering while applying filters (solved by disabling drag behavior during filtered views)',
      'Creating a scalable board state model that avoids nested mutation and supports future analytics',
      'Managing Zod + React Hook Form type compatibility under strict TypeScript settings',
      'Ensuring stored data remains clean and future-proof through versioned LocalStorage migrations',
    ],

    nextSteps: [
      'Add follow-up reminders with due-date highlighting and notification support',
      'Build analytics dashboards using Recharts (conversion rate, weekly activity, time-to-offer)',
      'Add salary range tracking and additional structured metadata per application',
      'Support file/link attachments and long-form notes per card',
      'Introduce Supabase authentication and cloud sync for multi-device access',
      'Add export/import functionality (CSV/JSON) for portability',
    ],

    stack: {
      frontend: [
        'React 19',
        'TypeScript',
        'TailwindCSS v4',
        'dnd-kit (sortable drag/drop)',
        'React Hook Form',
        'Zod',
      ],
      state: ['LocalStorage persistence', 'Normalized board state model'],
      tooling: ['Vite 7', 'ESLint'],
      hosting: ['Vercel'],
    },

    images: [
      // Add screenshots later:
      cldImage('job-tracker-01_f3mysc'),
      cldImage('job-tracker-02_vho19u'),
      cldImage('job-tracker-03_bp4pb7'),
      cldImage('job-tracker-04_zbfgfp'),
    ],
  },
  {
    slug: 'saas-dashboard',
    title: 'AcmeCloud - SaaS Dashboard UI',
    description:
      'A modern SaaS-style dashboard UI built with React and TypeScript featuring protected routes, analytics charts, notifications, settings, and dark mode support.',
    overview:
      'AcmeCloud is a fake SaaS dashboard project designed to replicate the look and feel of a real startup product. It includes a responsive sidebar layout, authentication flow with protected routes, interactive UI state (notifications, theme preferences), and a dashboard analytics experience powered by Recharts. The goal of this project was to build a polished, portfolio-ready interface that demonstrates real-world frontend architecture and clean UI patterns.',

    tags: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'Recharts',
      'React Router',
      'UI Architecture',
      'Dashboard UI',
      'Dark Mode',
      'Protected Routes',
      'Vite',
    ],

    repoUrl: 'https://github.com/tworoniak/saas-dashboard',
    liveUrl: 'https://saas-dashboard-rosy.vercel.app',

    role: 'Frontend Engineering',
    year: 2026,

    highlights: [
      'Built a full SaaS dashboard layout with sidebar navigation and nested routing',
      'Implemented fake authentication with protected routes and login redirect behavior',
      'Created a notifications dropdown system with unread state and UI interactions',
      'Integrated Recharts to display analytics data in a clean, modern dashboard UI',
      'Implemented persistent dark mode using Tailwind class-based theming and LocalStorage',
    ],

    features: [
      'Authentication flow with fake login/logout and session persistence',
      'Protected routes that redirect unauthenticated users to the login screen',
      'Dashboard page with KPI cards and revenue chart visualization',
      'Settings page with workspace preferences and theme controls',
      'Notifications dropdown with unread badge and mark-as-read behavior',
      'Responsive layout optimized for desktop and mobile views',
    ],

    challenges: [
      'Structuring the project cleanly with scalable folder architecture (auth, theme, routes, ui)',
      'Managing persistent state (theme + auth) without overcomplicating the state layer',
      'Ensuring React Fast Refresh compatibility by separating providers, hooks, and utilities',
      'Creating a polished UI using Tailwind while keeping components clean and reusable',
      'Building a realistic dashboard layout experience using nested routing patterns',
    ],

    nextSteps: [
      'Add real authentication using Supabase or Firebase',
      'Add role-based access control (Admin vs User)',
      'Create additional dashboard pages such as Billing, Team, and Usage Analytics',
      'Add toast notifications and loading skeleton states',
      'Add API-driven chart data and a mock backend layer',
    ],

    stack: {
      frontend: [
        'React 19',
        'TypeScript',
        'TailwindCSS v4',
        'React Router',
        'Recharts',
      ],
      tooling: ['Vite', 'ESLint'],
      hosting: ['Vercel'],
    },

    images: [
      // Add screenshot paths here later, example:
      // '/images/projects/saas-dashboard/dashboard.png',
      // '/images/projects/saas-dashboard/login.png',
      // '/images/projects/saas-dashboard/settings.png',
    ],
  },
  {
    slug: 'riff-finder',
    title: 'Riff Finder',
    description:
      'Riff Finder is a music discovery app built with React, TypeScript, and TailwindCSS.',
    overview:
      'Riff Finder is a music discovery app built with React, TypeScript, and TailwindCSS. It allows users to search artists, view top tracks/albums, and generate recommendations using a rules-based discovery algorithm. Uses TanStack Query for data fetching and caching, with a mock Spotify API setup for easy migration to real Spotify endpoints.',

    tags: ['React', 'TypeScript', 'TailwindCSS', 'UI State', 'Vite'],

    repoUrl: 'https://github.com/tworoniak/riff-finder',
    // liveUrl: '#',

    role: 'Frontend Engineering',
    year: 2026,

    highlights: ['To be added...'],

    features: ['To be added...'],

    challenges: ['To be added...'],

    nextSteps: ['To be added...'],

    stack: {
      frontend: [
        'React 19',
        'TypeScript',
        'TailwindCSS v4',
        '@coreui/react',
        'rc-progress',
        'lucide-react',
      ],
      tooling: ['Vite 7', 'ESLint'],
      hosting: ['Vercel'],
    },

    images: [],
  },
  {
    slug: 'music-player',
    title: 'Music Player',
    description:
      'A React music player with playlist controls, progress tracking, and a responsive UI.',
    overview:
      'I built a browser-based music player to practice real-world UI state management around media playback—play/pause, next/previous, progress seeking, and track selection—while keeping the interface responsive and component-driven. The goal was to build a reusable player architecture that cleanly separates audio control logic from UI components and styling.',

    tags: ['React', 'TypeScript', 'TailwindCSS', 'Sass', 'UI State', 'Vite'],

    repoUrl: 'https://github.com/tworoniak/music-player',
    liveUrl: 'https://music-player-eight-henna.vercel.app',

    role: 'Frontend Engineering',
    year: 2026,

    highlights: [
      'Audio playback controls wired to the HTMLAudioElement via a React ref',
      'Progress tracking + seeking using rc-progress with time/duration display',
      'Component-based UI using CoreUI with custom styling via TailwindCSS + Sass',
      'State-driven playlist selection and active track UI',
      'Interaction polish using lucide-react icons and responsive layout patterns',
    ],

    features: [
      'Play / pause and next / previous track navigation',
      'Seekable progress bar with current time + duration tracking',
      'Volume and playback controls (as implemented)',
      'Track list / playlist selection and active track indication',
      'Responsive layout designed for desktop and mobile',
    ],

    challenges: [
      'Keeping playback behavior consistent across track changes (resetting progress, loading metadata, auto-play behavior)',
      'Avoiding stale state bugs between UI controls and audio element events',
      'Designing reusable components without coupling logic to a single layout',
      'Handling edge cases like track end events, duration loading, and rapid user input',
    ],

    nextSteps: [
      'Add keyboard shortcuts (space play/pause, arrows seek/skip) and improved accessibility labels',
      'Persist player state (last track, volume, position) using localStorage',
      'Add shuffle/repeat modes and a favorites/playlist system',
      'Add better loading states and error handling for missing/unavailable tracks',
      'Add tests around player helpers and critical UI interactions',
    ],

    stack: {
      frontend: [
        'React 19',
        'TypeScript',
        'TailwindCSS v4',
        'Sass',
        '@coreui/react',
        'rc-progress',
        'lucide-react',
      ],
      tooling: ['Vite 7', 'ESLint'],
      hosting: ['Vercel'],
    },

    images: [],
  },

  {
    slug: 'crypto-dash',
    title: 'CryptoDash',
    description:
      'A crypto dashboard that pulls market data from CoinGecko and visualizes trends with Chart.js.',
    tags: ['React', 'React Router', 'CoinGecko', 'Chart.js', 'Vite'],

    repoUrl: 'https://github.com/tworoniak/crypto-dash',
    liveUrl: 'https://crypto-dash-hazel-kappa.vercel.app',

    role: 'Frontend Engineering',
    year: 2026,

    overview:
      'I built a lightweight crypto dashboard using the CoinGecko API to display market data and visualize price trends. The goal was to practice API-driven UI patterns (loading/error states, formatting, and routing) while keeping the interface fast, readable, and mobile-friendly.',

    highlights: [
      'CoinGecko-powered market data with a clean, scannable dashboard UI',
      'Chart visualizations built with Chart.js + react-chartjs-2',
      'Date-aware chart formatting using date-fns and chartjs-adapter-date-fns',
      'Client-side routing with React Router for multi-view navigation',
      'Polished UI details with lucide-react icons and react-spinners loading states',
    ],

    features: [
      'Crypto listings view for quick price checks and market context',
      'Chart view(s) for trend visualization over time',
      'Loading indicators and resilient error handling during API calls',
      'Date-formatted chart axes and time-series readability improvements',
      'Mobile-friendly layout and lightweight navigation with React Router',
    ],

    challenges: [
      'Handling real-world API constraints (rate limits, missing fields, intermittent failures)',
      'Making charts readable across screen sizes while keeping performance snappy',
      'Ensuring smooth route transitions and state consistency between views',
      'Presenting dense numeric data in a UI that’s easy to scan quickly',
    ],

    nextSteps: [
      'Add search + sort (price, market cap, 24h change) to improve discovery',
      'Add coin detail pages with richer stats, ranges, and multiple time windows',
      'Add caching/revalidation (e.g., React Query) to reduce API calls and UI flicker',
      'Add a watchlist (localStorage) and simple alerts for threshold changes',
      'Add skeleton loaders and empty states for improved perceived performance',
    ],

    stack: {
      frontend: [
        'React 19',
        'React Router 7',
        'Chart.js',
        'react-chartjs-2',
        'lucide-react',
        'react-spinners',
        'date-fns',
        'chartjs-adapter-date-fns',
      ],
      apis: ['CoinGecko'],
      hosting: ['Vercel'],
      tooling: ['Vite', 'ESLint'],
    },

    images: [
      // add screenshot URLs when ready (Cloudinary or /public)
      // "https://.../screenshot1.png",
      cldImage('crypto-dash-01_hkcap0'),
      cldImage('crypto-dash-02_wqqsvk'),
      cldImage('crypto-dash-03_ynrwxq'),
      cldImage('crypto-dash-04_ihplea'),
    ],
  },

  {
    slug: 'idea-drop',
    title: 'IdeaDrop',
    description:
      'A full-stack idea management app with a modern React UI, JWT auth, and an Express/MongoDB API.',
    overview:
      'I built IdeaDrop as a full-stack application for capturing, browsing, and managing ideas through a clean, app-like interface. The frontend uses TanStack Router and TanStack Query for fast navigation and resilient server-state handling, while the backend provides a secure API with JWT-based auth, password hashing, and a MongoDB persistence layer via Mongoose.',

    tags: [
      'React',
      'TypeScript',
      'TailwindCSS',
      'TanStack Router',
      'TanStack Query',
      'Node',
      'Express',
      'MongoDB',
      'JWT',
    ],

    repoUrl: 'https://github.com/tworoniak/idea-drop',
    liveUrl: 'https://idea-drop-ten.vercel.app',

    role: 'Design + Full-Stack Engineering',
    year: 2026,

    highlights: [
      'Full-stack architecture: React UI + Express API + MongoDB persistence',
      'Client-side routing with TanStack Router and server-state management via TanStack Query',
      'JWT authentication using jose, with cookie support and protected API routes',
      'Password hashing with bcryptjs and secure auth flow patterns',
      'API integration via Axios with consistent loading/error/success states',
    ],

    features: [
      'Create, browse, and manage idea entries with end-to-end CRUD workflows',
      'Authentication flow with protected routes/actions and user-aware API behavior',
      'Server-state patterns: queries, mutations, and refetching via TanStack Query',
      'Local dev support using JSON Server for rapid UI iteration (when needed)',
      'Backend middleware setup including CORS, cookie parsing, and environment configuration',
    ],

    challenges: [
      'Keeping UI state consistent after create/update/delete actions without flicker',
      'Designing reusable query keys and mutation flows for maintainable data fetching',
      'Coordinating auth state across routing + API calls (including refresh behavior)',
      'Hardening the API with predictable validation/error responses for a better UX',
    ],

    nextSteps: [
      'Add stronger form validation and clearer error messaging end-to-end',
      'Expand test coverage for key flows (auth + CRUD + error states)',
      'Add pagination, sorting, and search to scale beyond small datasets',
      'Add rate limiting and request logging on the API',
      'Improve UX polish with skeleton loaders, empty states, and better retry/recovery',
    ],

    stack: {
      frontend: [
        'React 19',
        'TypeScript',
        'TanStack Router',
        'TanStack Query',
        'Axios',
        'TailwindCSS v4',
        'lucide-react',
      ],
      backend: [
        'Node.js',
        'Express 5',
        'MongoDB',
        'Mongoose',
        'jose (JWT)',
        'bcryptjs',
        'cookie-parser',
        'cors',
        'dotenv',
      ],
      testing: ['Vitest', 'Testing Library', 'jsdom'],
      tooling: ['Vite 7', 'JSON Server (local dev)'],
      hosting: ['Vercel (frontend)', 'Render (API)'],
    },

    images: [],
  },
];
