import { motion } from 'framer-motion'

const GROUPS = [
  {
    tag: 'No Poverty',
    stats: [
      { value: '315', label: 'Employees' },
      { value: '70%', label: 'Local hiring' },
    ],
  },
  {
    tag: 'Sustainable Cities & Communities',
    stats: [
      { value: '98%', label: 'Landfill diversion' },
      { value: '100%', label: 'Waste Segregation at Source' },
      { value: '36%', label: 'YoY increase in waste processed' },
      { value: '5', label: 'Cities Covered — Delhi, Gurugram, Sohna, Faridabad & Noida' },
    ],
  },
  {
    tag: 'Responsible Consumption & Production',
    stats: [
      { value: '65.4%', label: 'Of Dry Waste recycled' },
      { value: '100%', label: 'Of E-Waste recycled' },
      { value: '100%', label: 'Of Food Waste composted' },
      { value: '100%', label: 'Bio-Degradable packaging' },
    ],
  },
  {
    tag: 'Climate Action',
    stats: [
      { value: '94,817 MT', label: 'Of CO2e emissions offset' },
      { value: '0.54', label: 'Energy consumption per capita' },
      { value: '100%', label: 'Committed to Zero Waste to landfills' },
    ],
  },
]

export default function ImpactSection() {
  return (
    <section className="relative bg-white/[0.02] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block text-xs font-medium tracking-widest text-lime uppercase">Real Results</span>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Measurable Impact</h2>
        </motion.div>

        <div className="space-y-12">
          {GROUPS.map((group) => (
            <div key={group.tag}>
              <div className="mb-5 text-center">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-semibold tracking-wide text-moss-light uppercase">
                  {group.tag}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {group.stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
                    <div className="font-display gradient-text text-2xl font-semibold sm:text-3xl">{stat.value}</div>
                    <div className="mt-1 text-xs text-sand/55 sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
