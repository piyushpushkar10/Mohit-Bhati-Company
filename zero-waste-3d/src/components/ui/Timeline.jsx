import { motion } from 'framer-motion'

export default function Timeline({ items }) {
  return (
    <div className="relative mx-auto max-w-2xl border-l border-white/10 pl-8">
      {items.map((item, i) => (
        <motion.div
          key={item.year}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: i * 0.03 }}
          className="relative pb-10 last:pb-0"
        >
          <span className="absolute top-1 -left-[2.35rem] h-3 w-3 rounded-full border-2 border-ink bg-moss-light" />
          <div className="font-display text-lg font-semibold text-lime">{item.year}</div>
          <p className="mt-1 text-sm text-sand/65 sm:text-base">{item.text}</p>
        </motion.div>
      ))}
    </div>
  )
}
