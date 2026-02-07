import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.06 * i,
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // 👈 tuple
    },
  }),
};

export default function Home() {
  return (
    <div className='space-y-12'>
      <section className='relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10'>
        <div className='absolute inset-0 opacity-60'>
          <div className='absolute -top-16 -right-20 h-60 w-60 rounded-full bg-fuchsia-500/30 blur-3xl' />
          <div className='absolute -bottom-16 -left-20 h-60 w-60 rounded-full bg-cyan-400/25 blur-3xl' />
        </div>

        <div className='relative'>
          <motion.p
            variants={fadeUp}
            initial='hidden'
            animate='show'
            custom={0}
            className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200'
          >
            <span className='h-2 w-2 rounded-full bg-emerald-400' />
            Available for Senior Frontend roles
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial='hidden'
            animate='show'
            custom={1}
            className='mt-4 text-4xl font-semibold tracking-tight sm:text-5xl'
          >
            I build{' '}
            <span className='bg-linear-to-r from-fuchsia-300 to-cyan-200 bg-clip-text text-transparent'>
              bold
            </span>{' '}
            interfaces that feel fast.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial='hidden'
            animate='show'
            custom={2}
            className='mt-4 max-w-2xl text-zinc-200/90'
          >
            React + TypeScript, performance, accessibility, and clean UX. I like
            turning messy requirements into crisp products.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial='hidden'
            animate='show'
            custom={3}
            className='mt-6 flex flex-wrap gap-3'
          >
            <Link
              to='/projects'
              className='rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm hover:opacity-90'
            >
              View Projects
            </Link>
            <Link
              to='/contact'
              className='rounded-2xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10'
            >
              Contact
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial='hidden'
            animate='show'
            custom={4}
            className='mt-8 flex flex-wrap gap-2 text-xs text-zinc-300'
          >
            {[
              'React',
              'TypeScript',
              'Accessibility',
              'Performance',
              'Design Systems',
            ].map((t) => (
              <span
                key={t}
                className='rounded-full border border-white/10 bg-black/20 px-3 py-1'
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className='space-y-4'>
        <div className='flex items-baseline justify-between'>
          <h2 className='text-xl font-semibold'>Featured Projects</h2>
          <Link
            className='text-sm underline underline-offset-4 hover:text-white'
            to='/projects'
          >
            See all
          </Link>
        </div>

        <div className='grid gap-4 sm:grid-cols-2'>
          {[
            {
              title: 'IdeaDrop',
              desc: 'Capture + organize ideas with a smooth UI.',
            },
            {
              title: 'Portfolio',
              desc: 'Bold, animated site built with Vite + Tailwind.',
            },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className='group rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/10'
            >
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <div className='text-lg font-semibold'>{p.title}</div>
                  <p className='mt-2 text-sm text-zinc-200/90'>{p.desc}</p>
                </div>
                <div className='h-10 w-10 rounded-2xl border border-white/10 bg-linear-to-br from-fuchsia-400/30 to-cyan-300/20' />
              </div>

              <div className='mt-4 flex flex-wrap gap-2 text-xs text-zinc-300'>
                {['React', 'TypeScript'].map((t) => (
                  <span
                    key={t}
                    className='rounded-full border border-white/10 bg-black/20 px-3 py-1'
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className='mt-5 h-0.5 w-0 bg-linear-to-r from-fuchsia-400 to-cyan-300 transition-all duration-300 group-hover:w-full' />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
