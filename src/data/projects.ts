export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: 'photography-portfolio',
    title: 'Thomas Woroniak Photography',
    description:
      'A photography portfolio using React, React-Router, TypeScript, Cloudinary, TailwindCSS.',
    tags: [
      'React',
      'TypeScript',
      'Node',
      'React-Router',
      'Cloudinary',
      'TailwindCSS',
    ],
    repoUrl: 'https://github.com/tworoniak/photography-portfolio',
    liveUrl: 'https://photography-portfolio-iota-eight.vercel.app',
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
    slug: 'portfolio',
    title: 'Developer Portfolio',
    description: 'Neon/cyber portfolio with animated UI + fast routing.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    repoUrl: 'https://github.com/yourname/dev-portfolio',
  },
];
