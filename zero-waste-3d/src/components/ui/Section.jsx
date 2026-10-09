import { motion } from 'framer-motion'

// Shared section shell: eyebrow + title + optional description, centered,
// with children fading in on scroll. Used to keep every inner page's
// rhythm consistent without repeating the same header markup everywhere.
export default function Section({ eyebrow, title, description, children, className = '', tight = false }) {
  return (
    <section className={`relative px-6 ${tight ? 'py-14' : 'py-20'} ${className}`}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            {eyebrow && <span className="mb-3 inline-block text-xs font-medium tracking-widest text-lime uppercase">{eyebrow}</span>}
            {title && <h2 className="font-display text-2xl font-semibold sm:text-3xl">{title}</h2>}
            {description && <p className="mt-4 text-sm text-sand/65 sm:text-base">{description}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
