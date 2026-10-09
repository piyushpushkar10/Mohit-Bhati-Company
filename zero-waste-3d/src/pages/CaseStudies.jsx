import PageHero from '../components/PageHero'
import Section from '../components/ui/Section'

// Placeholder case studies — replace with your own real clients, results and quotes.
const CASE_STUDIES = [
  {
    client: 'Retail & Warehouse Client',
    result: 'High landfill diversion achieved across retail and warehouse sites',
    quote: 'Placeholder quote — swap in real feedback from a client once you have it.',
    person: 'Sustainability Lead',
  },
  {
    client: 'Educational Campus',
    result: 'Campus-wide zero waste program covering hostels and academic blocks',
    quote: 'Placeholder quote — swap in real feedback from a client once you have it.',
    person: 'Facilities Director',
  },
  {
    client: 'Manufacturing Client',
    result: 'Meaningful reduction in reject waste after structured segregation',
    quote: 'Placeholder quote — swap in real feedback from a client once you have it.',
    person: 'Plant Manager',
  },
]

const REPORTS = [
  { title: 'Annual Impact Report 2025', type: 'PDF Report' },
  { title: 'EPR Compliance Playbook for Brand Owners', type: 'Guide' },
  { title: 'Circular Textiles: A Recovery Facility Case Study', type: 'Case Study' },
]

export default function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies & Reports"
        title="Outcomes, not just activity."
        description="What changed on the ground when a client partnered with us — in their own words."
        breadcrumb={[{ label: 'Case Studies & Reports' }]}
      />

      <Section eyebrow="Case Studies" title="Client outcomes">
        <div className="grid gap-6 lg:grid-cols-3">
          {CASE_STUDIES.map((c) => (
            <div key={c.client} className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <h3 className="font-display mb-2 text-lg font-semibold text-sand">{c.client}</h3>
              <p className="mb-4 text-sm font-semibold text-lime">{c.result}</p>
              <p className="text-sm text-sand/60 italic">"{c.quote}"</p>
              <span className="mt-auto pt-5 text-xs text-sand/45">— {c.person}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Reports" title="Download our latest reports">
        <div className="mx-auto max-w-2xl space-y-3">
          {REPORTS.map((r) => (
            <div key={r.title} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div>
                <h3 className="text-sm font-semibold text-sand">{r.title}</h3>
                <span className="text-xs text-sand/45">{r.type}</span>
              </div>
              <span className="text-sm font-semibold text-moss-light">Download →</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
