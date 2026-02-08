import { useMemo, useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));

      const matchesTag = !activeTag || p.tags.includes(activeTag);

      return matchesQuery && matchesTag;
    });
  }, [query, activeTag]);

  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h1 className='text-3xl font-semibold tracking-tight'>Projects</h1>
        <p className='text-zinc-200/90'>
          Search, filter, and open project pages for deeper case studies.
        </p>
      </div>

      {/* Controls */}
      <div className='grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-4 sm:grid-cols-2'>
        <div className='space-y-2'>
          <label className='text-xs text-zinc-300'>Search</label>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search title, description, tags...'
            className='w-full rounded-2xl border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-cyan-300/40'
          />
        </div>

        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <label className='text-xs text-zinc-300'>Tag</label>
            {(activeTag || query) && (
              <button
                onClick={() => {
                  setQuery('');
                  setActiveTag(null);
                }}
                className='cursor-pointer text-xs underline underline-offset-4 text-zinc-300 hover:text-white'
              >
                Clear
              </button>
            )}
          </div>

          <div className='flex flex-wrap gap-2'>
            <button
              onClick={() => setActiveTag(null)}
              className={`cursor-pointer rounded-full px-3 py-1 text-xs border transition ${
                !activeTag
                  ? 'border-cyan-300/40 bg-cyan-300/10 text-white'
                  : 'border-white/10 bg-black/20 text-zinc-300 hover:bg-white/10'
              }`}
            >
              All
            </button>

            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`cursor-pointer rounded-full px-3 py-1 text-xs border transition ${
                  activeTag === t
                    ? 'border-fuchsia-300/40 bg-fuchsia-300/10 text-white'
                    : 'border-white/10 bg-black/20 text-zinc-300 hover:bg-white/10'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className='grid gap-5 sm:grid-cols-2'>
        {filtered.map((p) => (
          <ProjectCard
            key={p.slug}
            project={p}
            onTagClick={(tag) => setActiveTag(tag)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className='rounded-3xl border border-white/10 bg-white/5 p-6 text-zinc-200/90'>
          No projects match that search/filter.
        </div>
      )}
    </div>
  );
}
