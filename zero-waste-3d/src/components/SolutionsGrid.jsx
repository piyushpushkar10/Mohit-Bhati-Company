import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SolutionCard from './SolutionCard'

const FEATURED_SOLUTIONS = [
  {
    to: '/solutions/zero-waste-program',
    icon: '♻',
    title: 'Zero Waste Program for Corporates',
    description:
      'End-to-end waste management based on circular economy principles — audits, segregation, collection, processing, tracking and certification.',
    tags: ['Waste Audits', 'Segregation', 'Certification'],
  },
  {
    to: '/solutions/epr-plastics',
    icon: '🧾',
    title: 'Extended Producer Responsibility (EPR)',
    description:
      'Customized EPR compliance for plastic and e-waste — CPCB registration, collection, aggregation, traceability and annual return filing.',
    tags: ['Plastic EPR', 'E-Waste EPR', 'CPCB Filing'],
  },
  {
    to: '/solutions/recycled-products',
    icon: '🧵',
    title: 'Recycled Products',
    description:
      'Circular-economy-driven goods — refurbished laptops, eco-boards, recycled paper stationery, furniture and upcycled textiles.',
    tags: ['Refurbished Laptops', 'Eco-Boards', 'Upcycled Textiles'],
  },
]

export default function SolutionsGrid() {
  return (
    <section id="solutions" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium tracking-widest text-lime uppercase">
            What We Do
          </span>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Three ways we close the loop
          </h2>
          <p className="mt-4 text-sm text-sand/65 sm:text-base">
            From on-ground waste audits to compliance filing to finished recycled goods —
            hover a card to see it react.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1000 }}>
          {FEATURED_SOLUTIONS.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <SolutionCard {...solution} />
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-sand transition hover:border-white/35"
          >
            View All Solutions →
          </Link>
        </div>
      </div>
    </section>
  )
}
