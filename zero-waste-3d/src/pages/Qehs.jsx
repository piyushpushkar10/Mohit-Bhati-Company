import PageHero from '../components/PageHero'
import Section from '../components/ui/Section'
import StatGrid from '../components/ui/StatGrid'

const POLICIES = [
  { title: 'Quality', text: 'ISO 9001:2015 certified processes across every operational site.', icon: '✅' },
  { title: 'Environment', text: 'ISO 14001:2015 certified environmental management systems.', icon: '🌍' },
  { title: 'Health & Safety', text: 'ISO 45001:2018 certified occupational health and safety standards.', icon: '🦺' },
]

export default function Qehs() {
  return (
    <>
      <PageHero
        eyebrow="QEHS"
        title="Quality, Environment, Health & Safety."
        description="Our Integrated Management System (IMS) is certified by TUV across quality, environmental and occupational health & safety standards."
        breadcrumb={[{ label: 'QEHS' }]}
      />

      <Section eyebrow="Our Policies" title="Three standards, one Integrated Management System">
        <div className="grid gap-6 sm:grid-cols-3">
          {POLICIES.map((p) => (
            <div key={p.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-7 text-center">
              <div className="mb-4 text-4xl">{p.icon}</div>
              <h3 className="font-display mb-2 text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-sand/60">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Compliance in Numbers">
        <div className="mx-auto max-w-3xl">
          <StatGrid
            stats={[
              { label: 'Health & Safety Certification', value: '100%' },
              { label: 'Labor Law Compliance', value: '100%' },
              { label: 'Training Hours / yr (Field Staff)', value: '1,857' },
              { label: 'Landfill Diversion', value: '98%' },
            ]}
          />
        </div>
      </Section>
    </>
  )
}
