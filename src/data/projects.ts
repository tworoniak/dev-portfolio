import { cldImage } from '../utils/cloudinary';

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  // ✅ new
  role?: string;
  year?: number;
  highlights?: string[];
  images?: string[]; // screenshot URLs
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
    highlights: [
      'Fast, responsive gallery UI with route-based navigation and clean layouts',
      'Cloudinary-backed image delivery for optimized loading and consistent sizing',
      'Reusable components for galleries, featured sets, and home-page sections',
      'Accessible interactions (focus states, semantic structure, keyboard-friendly nav)',
    ],
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
    slug: 'portfolio',
    title: 'Developer Portfolio',
    description: 'Neon/cyber portfolio with animated UI + fast routing.',
    tags: ['React', 'React-Router', 'TypeScript', 'Tailwind', 'Framer Motion'],
    repoUrl: 'https://github.com/tworoniak/dev-portfolio',
    liveUrl: 'https://dev-portfolio-nu-two.vercel.app',
  },
  {
    slug: 'crypto-dash',
    title: 'CryptoDash',
    description:
      "Simple crypto price listing app based on Brad Traversy's on Udemy.com using React, React-Router, React-Chart.",
    tags: ['React', 'Node', 'React-Router', 'React-Chart'],
    repoUrl: 'https://github.com/tworoniak/crypto-dash',
    liveUrl: 'https://crypto-dash-hazel-kappa.vercel.app/',
  },
  {
    slug: 'idea-drop',
    title: 'IdeaDrop',
    description: 'Capture, organize, and share ideas with a clean UI.',
    tags: [
      'React',
      'TypeScript',
      'Node',
      'MongoDB',
      'TailwindCSS',
      'Tanstack-React-Query',
      'Tanstack-Router',
    ],
    repoUrl: 'https://github.com/tworoniak/idea-drop',
    liveUrl: 'https://idea-drop-ten.vercel.app/',
  },

  {
    slug: 'music-player',
    title: 'Music Player',
    description:
      'Basic music player built with React, TypeScript, TailwindCSS.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    repoUrl: 'https://github.com/tworoniak/music-player',
    liveUrl: 'https://music-player-eight-henna.vercel.app/',
  },
];
