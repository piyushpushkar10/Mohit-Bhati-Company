import { motion } from 'framer-motion'

// Text overlay for one chapter of the scroll journey. `whileInView` runs
// independently of the continuous 3D scroll-progress store, so the copy
// still fades in nicely even in Classic Mode with the canvas switched off.
export default function PhaseSection({ id, eyebrow, title, description, items, align = 'left' }) {
  const alignment = align === 'right' ? 'items-end text-right ml-auto' : 'items-start text-left'

  return (
    <section id={id} className="relative flex h-screen items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className={`flex max-w-md flex-col gap-4 ${alignment}`}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-widest text-lime uppercase backdrop-blur">
          {eyebrow}
        </span>
        <h2 className="font-display text-3xl leading-tight font-semibold sm:text-4xl">{title}</h2>
        <p className="text-sm text-sand/70 sm:text-base">{description}</p>
        {items && (
          <ul className="mt-2 flex flex-wrap gap-2">
            {items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sand/80"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </section>
  )
}
