import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLink =
  'px-3 py-2 rounded-xl text-sm font-medium transition hover:opacity-80';

type NavItem = { to: string; label: string; end?: boolean };

const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div className='min-h-screen bg-zinc-950 text-zinc-100'>
      {/* Background glow */}
      <div className='pointer-events-none fixed inset-0 overflow-hidden'>
        <div className='absolute -top-24 left-1/2 h-80 w-176 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl' />
        <div className='absolute top-40 left-1/3 h-72 w-160 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl' />
      </div>

      <header className='sticky top-0 z-20 border-b border-white/10 bg-zinc-950/60 backdrop-blur'>
        <div className='mx-auto flex max-w-5xl items-center justify-between px-4 py-3'>
          <NavLink
            to='/'
            className='group relative font-semibold tracking-tight'
          >
            <span className='text-lg'>Woroniak</span>
            <span className='text-fuchsia-300'>.dev</span>
            <span className='absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-fuchsia-400 to-cyan-300 transition-all duration-300 group-hover:w-full' />
          </NavLink>

          <nav className='flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-1'>
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end ?? false}
                className={({ isActive }) =>
                  `${navLink} ${isActive ? 'bg-white/10' : ''}`
                }
              >
                {({ isActive }) => (
                  <span className='relative'>
                    {item.label}
                    {isActive && (
                      <span className='absolute -bottom-1 left-0 h-0.5 w-full bg-linear-to-r from-fuchsia-400 to-cyan-300' />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className='mx-auto max-w-5xl px-4 py-10'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className='border-t border-white/10'>
        <div className='mx-auto max-w-5xl px-4 py-6 text-sm text-zinc-300'>
          © {new Date().getFullYear()} Thomas Woroniak Media •{' '}
          <a
            className='underline underline-offset-4 hover:text-white'
            href='https://github.com/tworoniak'
          >
            GitHub
          </a>{' '}
          •{' '}
          <a
            className='underline underline-offset-4 hover:text-white'
            href='https://www.linkedin.com/in/thomasworoniak/'
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
