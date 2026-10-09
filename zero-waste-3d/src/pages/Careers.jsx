import PageHero from '../components/PageHero'
import Section from '../components/ui/Section'
import { SITE_CONFIG } from '../data/siteConfig'

const BENEFITS = [
  { icon: '🌱', title: 'Purpose-Led Work', text: 'Every role ties directly back to measurable environmental and social impact.' },
  { icon: '📈', title: 'Room to Grow', text: 'A fast-scaling social enterprise with new verticals opening up regularly.' },
  { icon: '🤝', title: 'Inclusive Culture', text: '59% women workforce, formal pathways for informal-sector waste workers.' },
  { icon: '🎓', title: 'Continuous Training', text: '1,850+ training hours delivered to field staff every year.' },
]

const OPEN_ROLES = [
  { title: 'Operations Executive — Zero Waste Program', location: 'Bengaluru', type: 'Full-time' },
  { title: 'EPR Compliance Associate', location: 'Gurugram', type: 'Full-time' },
  { title: 'Field Supervisor — Materials Recovery Facility', location: 'Hyderabad', type: 'Full-time' },
  { title: 'Business Development Lead', location: 'Bengaluru', type: 'Full-time' },
]

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a career that closes the loop."
        description="We're hiring people who want their work to show up in real environmental and social outcomes, not just a job title."
        breadcrumb={[{ label: 'Careers' }]}
      />

      <Section eyebrow="Why Join Us" title="What it's like to work here">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div key={b.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 text-center">
              <div className="mb-3 text-3xl">{b.icon}</div>
              <h3 className="font-display mb-2 text-base font-semibold">{b.title}</h3>
              <p className="text-sm text-sand/60">{b.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Open Roles" title="Current openings">
        <div className="mx-auto max-w-3xl space-y-4">
          {OPEN_ROLES.map((role) => (
            <div
              key={role.title}
              className="flex flex-col justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="font-display text-base font-semibold text-sand">{role.title}</h3>
                <div className="mt-1 flex gap-3 text-xs text-sand/50">
                  <span>📍 {role.location}</span>
                  <span>🕒 {role.type}</span>
                </div>
              </div>
              <a
                href={SITE_CONFIG.emailHref}
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-semibold text-sand hover:border-white/35"
              >
                Apply
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-sand/50">
          Don't see a fit?{' '}
          <a href={SITE_CONFIG.emailHref} className="font-semibold text-lime">
            Send us your resume
          </a>{' '}
          anyway.
        </p>
      </Section>
    </>
  )
}
