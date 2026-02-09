import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export type ProjectCardData = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  image?: string;
};

type Props = {
  project: ProjectCardData;
  onTagClick?: (tag: string) => void;
};

export default function ProjectCard({ project, onTagClick }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className='group relative'
    >
      {/* Neon border shell */}
      <div className='absolute -inset-px rounded-3xl bg-linear-to-r from-fuchsia-500/70 via-cyan-400/70 to-emerald-400/70 opacity-60 blur-[6px] transition group-hover:opacity-90' />
      <div className='absolute -inset-px rounded-3xl bg-linear-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 opacity-20 transition group-hover:opacity-40' />

      {/* Full clickable card */}
      <Link
        to={`/projects/${project.slug}`}
        className='relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 p-5 backdrop-blur transition hover:border-white/20'
      >
        {/* Cyber scanline */}
        <div className='pointer-events-none absolute inset-0 opacity-[0.08] [background:repeating-linear-gradient(to_bottom,white_0px,white_1px,transparent_2px,transparent_6px)]' />

        {/* Glow corner */}
        <div className='pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl transition group-hover:bg-fuchsia-500/20' />

        <div className='relative flex items-start justify-between gap-4'>
          <div>
            <h3 className='text-lg font-semibold tracking-tight text-zinc-50'>
              {project.title}
            </h3>
            <p className='mt-2 text-sm text-zinc-200/90'>
              {project.description}
            </p>
          </div>

          <div className='h-11 w-11 p-5 shrink-0 rounded-full border border-white/10 bg-linear-to-br from-fuchsia-500/20 via-cyan-400/15 to-emerald-400/15' />
        </div>

        {/* Tags */}
        <div className='relative mt-4 flex flex-wrap gap-2 text-xs text-zinc-300'>
          {project.tags.map((t) => (
            <button
              key={t}
              type='button'
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onTagClick?.(t);
              }}
              className='cursor-pointer rounded-full border border-whiteSmoke/30 bg-black/20 px-3 py-1 transition hover:bg-whiteSmoke/30'
              title={`Filter by ${t}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div className='relative mt-5 flex flex-wrap gap-3'>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target='_blank'
              rel='noreferrer'
              onClick={(e) => e.stopPropagation()}
              className='rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-white/10'
            >
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noreferrer'
              onClick={(e) => e.stopPropagation()}
              className='rounded-xl bg-white px-3 py-2 text-sm font-semibold text-zinc-950 transition hover:opacity-90'
            >
              Live
            </a>
          )}
        </div>

        {/* Animated trace bar */}
        <div className='relative mt-5 h-0.5 w-0 bg-linear-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 transition-all duration-300 group-hover:w-full' />
      </Link>
    </motion.div>
  );
}
