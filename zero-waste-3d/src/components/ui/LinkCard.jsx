import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function LinkCard({ to, icon, title, description, tag, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link
        to={to}
        className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors hover:border-moss-light/40 hover:bg-white/[0.05]"
      >
        {icon && (
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-moss-light/15 text-2xl">{icon}</div>
        )}
        {tag && <span className="mb-2 text-[11px] font-semibold tracking-wide text-lime uppercase">{tag}</span>}
        <h3 className="font-display mb-2 text-lg font-semibold text-sand">{title}</h3>
        {description && <p className="text-sm text-sand/60">{description}</p>}
        <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-semibold text-moss-light transition group-hover:gap-2">
          Learn more →
        </span>
      </Link>
    </motion.div>
  )
}
