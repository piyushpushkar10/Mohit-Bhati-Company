import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Section from '../components/ui/Section'
import StatGrid from '../components/ui/StatGrid'

const STEPS = [
  { title: 'Collect', text: 'End-of-life laptops are collected from corporates and IT asset retirement programs.' },
  { title: 'Wipe & Test', text: 'Certified data wiping, followed by full hardware diagnostics on every unit.' },
  { title: 'Refurbish', text: 'Parts replaced, casings restored, and each device graded for condition.' },
  { title: 'Resell or Reuse', text: 'Refurbished laptops go to students, NGOs and budget-conscious buyers.' },
]

export default function RefurbishedLaptops() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Refurbished Laptops"
        description="Giving end-of-life electronics a genuine second life — tested, wiped, restored and resold, instead of landfilled."
        breadcrumb={[{ label: 'Refurbished Laptops' }]}
      />

      <Section eyebrow="At a Glance">
        <div className="mx-auto max-w-3xl">
          <StatGrid
            stats={[
              { label: 'E-Waste Recycled', value: '100%' },
              { label: 'Devices Refurbished / yr', value: '1,000+' },
              { label: 'Data Wipe Compliance', value: 'Certified' },
              { label: 'Landfill Diversion', value: '98%' },
            ]}
          />
        </div>
      </Section>

      <Section eyebrow="How It Works" title="From retired asset to second life">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
              <span className="font-display text-3xl font-semibold text-lime">{i + 1}</span>
              <h3 className="font-display mt-3 mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-sand/60">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Placeholder testimonial — swap in real client feedback once available. */}
      <Section eyebrow="Client Voice">
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
          <div className="mb-3 text-lime">★★★★★</div>
          <p className="text-base text-sand/75 italic sm:text-lg">
            "Placeholder quote — swap in real feedback from a client once you have it."
          </p>
          <div className="mt-4 text-sm font-semibold text-sand">IT Asset Manager</div>
          <div className="text-xs text-sand/50">Enterprise Client</div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display mb-4 text-2xl font-semibold sm:text-3xl">Looking to retire IT assets responsibly?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink">
            Start an IT Asset Take-Back
          </Link>
        </div>
      </Section>
    </>
  )
}
