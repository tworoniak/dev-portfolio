// import { Link, useParams } from 'react-router-dom';
// import { projects } from '../data/projects';

// export default function ProjectDetail() {
//   const { slug } = useParams();
//   const project = projects.find((p) => p.slug === slug);

//   if (!project) {
//     return (
//       <div className='space-y-4'>
//         <h1 className='text-2xl font-semibold'>Project not found</h1>
//         <Link className='underline underline-offset-4' to='/projects'>
//           Back to Projects
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className='space-y-6'>
//       <div className='space-y-2'>
//         <Link className='text-sm underline underline-offset-4' to='/projects'>
//           ← Back
//         </Link>
//         <h1 className='text-3xl font-semibold tracking-tight'>
//           {project.title}
//         </h1>
//         <p className='text-zinc-700'>{project.description}</p>
//       </div>

//       <div className='flex flex-wrap gap-2 text-xs text-zinc-600'>
//         {project.tags.map((t) => (
//           <span key={t} className='rounded-full border px-2 py-1'>
//             {t}
//           </span>
//         ))}
//       </div>

//       <div className='flex flex-wrap gap-3 pt-2'>
//         {project.repoUrl && (
//           <a
//             className='rounded-xl border px-4 py-2'
//             href={project.repoUrl}
//             target='_blank'
//             rel='noreferrer'
//           >
//             GitHub Repo
//           </a>
//         )}
//         {project.liveUrl && (
//           <a
//             className='rounded-xl bg-zinc-900 px-4 py-2 text-white'
//             href={project.liveUrl}
//             target='_blank'
//             rel='noreferrer'
//           >
//             Live Demo
//           </a>
//         )}
//       </div>

//       <div className='rounded-2xl border p-5'>
//         <div className='font-semibold'>Case study sections to add</div>
//         <ul className='mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700'>
//           <li>Problem / goal</li>
//           <li>Stack + architecture</li>
//           <li>Key features</li>
//           <li>Challenges + solutions</li>
//           <li>What you’d do next</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const glow = 'bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className='space-y-4'>
        <h1 className='text-2xl font-semibold'>Project not found</h1>
        <Link
          className='underline underline-offset-4 hover:text-white'
          to='/projects'
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className='space-y-8'>
      {/* Back */}
      <Link
        to='/projects'
        className='inline-flex items-center gap-2 text-sm text-zinc-200/90 underline underline-offset-4 hover:text-white'
      >
        ← Back to Projects
      </Link>

      {/* HERO */}
      <section className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8'>
        {/* cyber scanlines */}
        <div className='pointer-events-none absolute inset-0 opacity-[0.08] [background:repeating-linear-gradient(to_bottom,white_0px,white_1px,transparent_2px,transparent_6px)]' />
        {/* glows */}
        <div className='pointer-events-none absolute -top-28 -right-28 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl' />
        <div className='pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl' />

        <div className='relative'>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className='text-3xl font-semibold tracking-tight sm:text-4xl'
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className='mt-3 max-w-3xl text-zinc-200/90'
          >
            {project.description}
          </motion.p>

          {/* Chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className='mt-5 flex flex-wrap gap-2 text-xs text-zinc-300'
          >
            {project.tags.map((t) => (
              <span
                key={t}
                className='rounded-full border border-white/10 bg-black/20 px-3 py-1'
              >
                {t}
              </span>
            ))}
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            className='mt-6 flex flex-wrap gap-3'
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noreferrer'
                className='rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 hover:opacity-90'
              >
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target='_blank'
                rel='noreferrer'
                className='rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10'
              >
                GitHub Repo
              </a>
            )}
          </motion.div>

          {/* neon divider */}
          <div className='mt-7 h-px w-full bg-white/10' />
          <div className={`mt-0.5 h-0.5 w-40 ${glow}`} />
        </div>
      </section>

      {/* BODY */}
      <div className='grid gap-6 lg:grid-cols-[1fr_280px]'>
        {/* Main column */}
        <div className='space-y-6'>
          {/* Overview */}
          <section className='rounded-3xl border border-white/10 bg-white/5 p-6'>
            <h2 className='text-lg font-semibold'>Overview</h2>
            <p className='mt-3 text-sm text-zinc-200/90'>
              Add 4–6 sentences here: the problem, your goal, who it’s for, and
              the key outcome. Keep it concrete (performance gains, UX
              improvement, time saved, etc.).
            </p>
          </section>

          {/* Highlights */}
          <section className='rounded-3xl border border-white/10 bg-white/5 p-6'>
            <h2 className='text-lg font-semibold'>Highlights</h2>
            <ul className='mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-200/90'>
              <li>Neon UI with animated transitions and responsive layouts</li>
              <li>Search + tag filtering for quick project discovery</li>
              <li>Accessible components and keyboard-friendly interactions</li>
              <li>Optimized loading + image handling (add specifics)</li>
            </ul>
          </section>

          {/* Screenshots */}
          <section className='rounded-3xl border border-white/10 bg-white/5 p-6'>
            <div className='flex items-baseline justify-between'>
              <h2 className='text-lg font-semibold'>Screenshots</h2>
              <span className='text-xs text-zinc-400'>
                Drop images in later
              </span>
            </div>

            <div className='mt-4 grid gap-4 sm:grid-cols-2'>
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className='relative aspect-16/10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60'
                >
                  <div className='pointer-events-none absolute inset-0 opacity-[0.08] [background:repeating-linear-gradient(to_bottom,white_0px,white_1px,transparent_2px,transparent_6px)]' />
                  <div className='absolute inset-0 grid place-items-center text-xs text-zinc-500'>
                    Screenshot {n}
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 w-0 ${glow} transition-all duration-300 hover:w-full`}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Stack + Architecture */}
          <section className='rounded-3xl border border-white/10 bg-white/5 p-6'>
            <h2 className='text-lg font-semibold'>Stack & Architecture</h2>
            <div className='mt-4 grid gap-4 sm:grid-cols-2'>
              <div className='rounded-2xl border border-white/10 bg-black/20 p-4'>
                <div className='text-sm font-semibold'>Frontend</div>
                <p className='mt-2 text-sm text-zinc-200/90'>
                  React, TypeScript, Tailwind, Framer Motion, React Router.
                </p>
              </div>
              <div className='rounded-2xl border border-white/10 bg-black/20 p-4'>
                <div className='text-sm font-semibold'>Backend / Data</div>
                <p className='mt-2 text-sm text-zinc-200/90'>
                  Add your API, DB, auth, hosting, etc. (or “N/A” if
                  frontend-only).
                </p>
              </div>
            </div>
          </section>

          {/* Challenges */}
          <section className='rounded-3xl border border-white/10 bg-white/5 p-6'>
            <h2 className='text-lg font-semibold'>Challenges & Solutions</h2>
            <div className='mt-3 space-y-3 text-sm text-zinc-200/90'>
              <div className='rounded-2xl border border-white/10 bg-black/20 p-4'>
                <div className='font-semibold'>Challenge</div>
                <p className='mt-1'>
                  Example: complex state + filtering without slowing the UI.
                </p>
                <div className={`mt-3 h-0.5 w-28 ${glow}`} />
                <div className='mt-3 font-semibold'>Solution</div>
                <p className='mt-1'>
                  Example: memoized derived data, stable handlers, and
                  lightweight UI states.
                </p>
              </div>
            </div>
          </section>

          {/* Next steps */}
          <section className='rounded-3xl border border-white/10 bg-white/5 p-6'>
            <h2 className='text-lg font-semibold'>Next Steps</h2>
            <ul className='mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-200/90'>
              <li>Add MDX case studies per project</li>
              <li>Integrate screenshot lightbox</li>
              <li>Performance: route-based code splitting</li>
            </ul>
          </section>
        </div>

        {/* Side rail */}
        <aside className='space-y-4 lg:sticky lg:top-24 lg:self-start'>
          <div className='rounded-3xl border border-white/10 bg-white/5 p-5'>
            <div className='text-sm font-semibold'>Quick Links</div>
            <div className='mt-3 space-y-2 text-sm'>
              {project.liveUrl ? (
                <a
                  className='block rounded-2xl border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10'
                  href={project.liveUrl}
                  target='_blank'
                  rel='noreferrer'
                >
                  Live Demo →
                </a>
              ) : (
                <div className='text-zinc-500'>No live demo</div>
              )}

              {project.repoUrl ? (
                <a
                  className='block rounded-2xl border border-white/15 bg-white/5 px-3 py-2 hover:bg-white/10'
                  href={project.repoUrl}
                  target='_blank'
                  rel='noreferrer'
                >
                  GitHub Repo →
                </a>
              ) : (
                <div className='text-zinc-500'>No repo link</div>
              )}
            </div>
          </div>

          <div className='rounded-3xl border border-white/10 bg-white/5 p-5'>
            <div className='text-sm font-semibold'>At a glance</div>
            <div className='mt-3 space-y-2 text-sm text-zinc-200/90'>
              <div className='flex items-center justify-between'>
                <span className='text-zinc-400'>Role</span>
                <span>Frontend</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-zinc-400'>Year</span>
                <span>{new Date().getFullYear()}</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-zinc-400'>Status</span>
                <span className='inline-flex items-center gap-2'>
                  <span className='h-2 w-2 rounded-full bg-emerald-400' />
                  Active
                </span>
              </div>
            </div>

            <div className='mt-4 h-px bg-white/10' />
            <div className={`mt-0.5 h-0.5 w-24 ${glow}`} />
          </div>
        </aside>
      </div>
    </div>
  );
}
