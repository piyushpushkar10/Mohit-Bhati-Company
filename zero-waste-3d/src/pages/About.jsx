import PageHero from '../components/PageHero'
import Section from '../components/ui/Section'
import StatGrid from '../components/ui/StatGrid'
import Timeline from '../components/ui/Timeline'
import { SITE_CONFIG } from '../data/siteConfig'

const VALUES = ['Resilience', 'Integrity', 'Impact', 'Innovation', 'Humility', 'Team']

// Founding year is real; the rest are placeholder milestones — swap in your
// company's actual growth story and dates once you share them.
const TIMELINE = [
  { year: SITE_CONFIG.foundedYear, text: 'Founded with a focus on responsible waste management and resource recovery.' },
  { year: 'Since', text: 'Grown to offer end-to-end Zero Waste Programs, EPR compliance and recycled products.' },
  { year: 'Today', text: 'Serving corporates, campuses and communities with complete waste management solutions.' },
]

// Mohit Bhati is real; the rest are placeholder roles — swap in your actual
// team's names and titles once you have them.
const LEADERSHIP = [
  { name: 'Mohit Bhati', title: 'Director' },
  { title: 'Operations Director' },
  { title: 'EPR Compliance Lead' },
  { title: 'Business Development Lead' },
  { title: 'Field Operations Manager' },
  { title: 'Sustainability Lead' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Resource recovery, dignified livelihood, circular economy."
        description="We bring together nature, people and technology to enable maximum resource recovery — building toward a zero-waste world through a circular economy."
        breadcrumb={[{ label: 'About Us' }]}
      />

      <Section eyebrow="Who We Are" title="A social enterprise built for scale">
        <div className="mx-auto max-w-3xl space-y-4 text-center text-sand/70">
          <p>
            Founded in {SITE_CONFIG.foundedYear}, {SITE_CONFIG.companyName} is a growing team dedicated to responsible
            waste management. We run three focus areas: the Zero Waste Programme, Extended Producer Responsibility,
            and our recycled-products line.
          </p>
          <p>Our goal: scale toward a fully circular, zero-waste-to-landfill model for every client we serve.</p>
        </div>
      </Section>

      {/* Placeholder metrics — replace with your own audited figures once available. */}
      <Section eyebrow="Impact" title="What we aim to measure">
        <StatGrid
          stats={[
            { label: 'Employees', value: '—' },
            { label: 'Local Hiring', value: '—' },
            { label: 'Landfill Diversion', value: '—' },
            { label: 'Women Workforce', value: '—' },
            { label: 'CO2e Offset', value: '—' },
            { label: 'Ocean-Bound Plastic Diverted', value: '—' },
            { label: 'Direct & Indirect Livelihoods', value: '—' },
            { label: 'Training Hours (Field Staff)', value: '—' },
          ]}
        />
      </Section>

      <Section eyebrow="Our Values" title="RIIIHT">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {VALUES.map((value) => (
            <div key={value} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-moss-light text-sm font-bold text-ink">
                {value[0]}
              </div>
              <div className="text-sm text-sand/75">{value}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Milestones" title="Our journey so far">
        <Timeline items={TIMELINE} />
      </Section>

      <Section eyebrow="Leadership" title="The team behind the work">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {LEADERSHIP.map((person) => (
            <div key={person.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-moss-light/15 text-xl">
                👤
              </div>
              {person.name && <div className="text-sm font-semibold text-sand">{person.name}</div>}
              <div className={person.name ? 'text-xs text-sand/55' : 'text-sm font-semibold text-sand'}>{person.title}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Quality & Safety" title="Standards we work toward">
        <div className="flex flex-wrap justify-center gap-4">
          {['ISO 9001 — Quality', 'ISO 14001 — Environment', 'ISO 45001 — Health & Safety'].map((cert) => (
            <span key={cert} className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm text-sand/75">
              {cert}
            </span>
          ))}
        </div>
      </Section>
    </>
  )
}
