import { useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  isOpen: boolean;
  images: string[];
  index: number;
  title?: string;
  onClose: () => void;
  onIndexChange: (nextIndex: number) => void;
};

const glow = 'bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300';

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function NeonLightbox({
  isOpen,
  images,
  index,
  title,
  onClose,
  onIndexChange,
}: Props) {
  const count = images.length;

  const canShow = isOpen && count > 0;
  const src = useMemo(() => images[mod(index, count)], [images, index, count]);

  const goPrev = () => onIndexChange(mod(index - 1, count));
  const goNext = () => onIndexChange(mod(index + 1, count));

  // Keyboard controls + scroll lock
  useEffect(() => {
    if (!canShow) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canShow, index, count]);

  return (
    <AnimatePresence>
      {canShow && (
        <motion.div
          className='fixed inset-0 z-50 grid place-items-center p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal='true'
          role='dialog'
        >
          {/* Overlay (click to close) */}
          <motion.button
            type='button'
            className='absolute inset-0 cursor-default bg-black/70'
            onClick={onClose}
            aria-label='Close lightbox'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Neon frame */}
          <div className='relative w-full max-w-5xl'>
            <div className='pointer-events-none absolute -inset-2 rounded-[28px] opacity-70 blur-xl'>
              <div className={`h-full w-full rounded-[28px] ${glow}`} />
            </div>

            <motion.div
              className='relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/70 backdrop-blur'
              initial={{ y: 10, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {/* Top bar */}
              <div className='flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3'>
                <div className='min-w-0'>
                  <div className='truncate text-sm font-semibold text-zinc-100'>
                    {title ?? 'Screenshots'}
                  </div>
                  <div className='text-xs text-zinc-400'>
                    {mod(index, count) + 1} / {count}
                  </div>
                </div>

                <div className='flex items-center gap-2'>
                  <button
                    type='button'
                    onClick={goPrev}
                    className='cursor-pointer rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-zinc-100 hover:bg-white/10'
                    aria-label='Previous image'
                  >
                    ←
                  </button>
                  <button
                    type='button'
                    onClick={goNext}
                    className='cursor-pointer rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-zinc-100 hover:bg-white/10'
                    aria-label='Next image'
                  >
                    →
                  </button>
                  <button
                    type='button'
                    onClick={onClose}
                    className='cursor-pointer rounded-xl bg-white px-3 py-2 text-sm font-semibold text-zinc-950 hover:opacity-90'
                    aria-label='Close'
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Image area */}
              <div className='relative'>
                {/* scanlines */}
                {/* <div className='pointer-events-none absolute inset-0 opacity-[0.07] [background:repeating-linear-gradient(to_bottom,white_0px,white_1px,transparent_2px,transparent_6px)]' /> */}
                {/* glows */}
                <div className='pointer-events-none absolute -top-28 -right-28 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl' />
                <div className='pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl' />

                {/* Swipe (drag left/right) */}
                <motion.div
                  className='grid place-items-center px-3 py-3'
                  drag='x'
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    const offset = info.offset.x;
                    const velocity = info.velocity.x;
                    const swipePower = Math.abs(offset) * Math.abs(velocity);

                    // tweak thresholds to taste
                    if (offset > 80 || swipePower > 12000) goPrev();
                    if (offset < -80 || swipePower > 12000) goNext();
                  }}
                >
                  {/* Use key to animate between images */}
                  <motion.img
                    key={src}
                    src={src}
                    alt={title ? `${title} screenshot` : 'Screenshot'}
                    className='max-h-[72vh] w-auto select-none rounded-2xl border border-white/10 object-contain'
                    draggable={false}
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.18 }}
                  />
                </motion.div>

                {/* Neon divider */}
                <div className='h-px bg-white/10' />
                <div className={`h-0.5 w-40 ${glow}`} />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
