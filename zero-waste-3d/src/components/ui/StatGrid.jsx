import { motion } from 'framer-motion'

export default function StatGrid({ stats, columns = 4 }) {
  const cols = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }[columns]

  return (
    <div className={`grid grid-cols-2 gap-4 ${cols}`}>
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
          className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center"
        >
          <div className="font-display gradient-text text-2xl font-semibold sm:text-3xl">{stat.value}</div>
          <div className="mt-1 text-xs text-sand/55 sm:text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
