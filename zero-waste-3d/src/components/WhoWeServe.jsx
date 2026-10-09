import { motion } from 'framer-motion'

const SECTORS = [
  { title: 'Companies', text: 'Compliance with waste management regulations, incl. Solid Waste Management Rules (2016)', icon: '🏢' },
  { title: 'Tech Parks', text: 'Waste audits, segregation, food waste composting and bio-methanation', icon: '🏬' },
  { title: 'Townships', text: 'Complete waste systems implementation with segregation at source', icon: '🏘️' },
  { title: 'Educational Institutions', text: 'Comprehensive services beginning with detailed waste audits', icon: '🎓' },
  // Note: original reference copy said "A decade of..." — adjusted since the
  // company was founded in 2019, so "a decade" wouldn't be accurate yet.
  { title: 'Property & Facility Managers', text: 'Dedicated waste management services aligned with ESG goals', icon: '🏗️' },
  { title: 'Producers & Brand Owners', text: 'Registration, reverse logistics, traceability and reporting', icon: '📦' },
  { title: 'Residential Communities', text: 'Segregation, collection, processing, sorting and tracking', icon: '🏡' },
  { title: 'Consulting Organizations', text: 'Infrastructure setup and EPR compliance advisory', icon: '🧭' },
]

export default function WhoWeServe() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block text-xs font-medium tracking-widest text-lime uppercase">Who We Serve</span>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Solutions tailored to every sector</h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-moss-light/15 text-2xl">
                {s.icon}
              </div>
              <h3 className="font-display mb-2 text-base font-semibold text-sand">{s.title}</h3>
              <p className="text-sm text-sand/60">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
