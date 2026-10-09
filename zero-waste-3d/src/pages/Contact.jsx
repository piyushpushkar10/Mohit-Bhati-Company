import { useState } from 'react'
import PageHero from '../components/PageHero'
import Section from '../components/ui/Section'
import { SITE_CONFIG } from '../data/siteConfig'

const TABS = [
  { id: 'business', label: 'Business Enquiry' },
  { id: 'support', label: 'Customer Support' },
]

export default function Contact() {
  const [tab, setTab] = useState('business')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    e.target.reset()
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk waste."
        description="Waste audit, EPR compliance, a custom Zero Waste Program, or just a question — reach out."
        breadcrumb={[{ label: 'Contact' }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-8 space-y-5">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-moss-light/15 text-lg">📍</span>
                <div>
                  <div className="text-sm font-semibold text-sand">{SITE_CONFIG.hq.label}</div>
                  <div className="text-sm text-sand/60">{SITE_CONFIG.hq.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-moss-light/15 text-lg">📞</span>
                <div>
                  <div className="text-sm font-semibold text-sand">Phone</div>
                  <a href={SITE_CONFIG.phoneHref} className="text-sm text-sand/60 hover:text-sand">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-moss-light/15 text-lg">✉️</span>
                <div>
                  <div className="text-sm font-semibold text-sand">Email</div>
                  <a href={SITE_CONFIG.emailHref} className="text-sm text-sand/60 hover:text-sand">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="h-72 overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="Office location map"
                className="h-full w-full"
                src={`https://www.google.com/maps?q=${encodeURIComponent(SITE_CONFIG.mapEmbedQuery)}&output=embed`}
                loading="lazy"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-xs text-sand/50">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">GSTIN: {SITE_CONFIG.gstin}</span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">Udyam Reg. No.: {SITE_CONFIG.udyam}</span>
            </div>
          </div>

          <div>
            <div className="mb-6 flex gap-2">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`flex-1 rounded-lg px-4 py-3 text-sm font-semibold transition ${
                    tab === t.id ? 'bg-moss-light text-ink' : 'border border-white/10 text-sand/60 hover:text-sand'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div className="mb-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-sand/60">Full Name</label>
                  <input required type="text" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-sand outline-none focus:border-moss-light" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-sand/60">City</label>
                  <input required type="text" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-sand outline-none focus:border-moss-light" />
                </div>
              </div>
              <div className="mb-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-sand/60">Email</label>
                  <input required type="email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-sand outline-none focus:border-moss-light" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-sand/60">Phone</label>
                  <input required type="tel" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-sand outline-none focus:border-moss-light" />
                </div>
              </div>
              {tab === 'business' ? (
                <div className="mb-4">
                  <label className="mb-1.5 block text-xs font-semibold text-sand/60">Industry / Sector</label>
                  <input type="text" placeholder="e.g. Tech Park, Educational Institution, Brand Owner" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-sand outline-none focus:border-moss-light" />
                </div>
              ) : (
                <div className="mb-4">
                  <label className="mb-1.5 block text-xs font-semibold text-sand/60">Reference / Site ID (if any)</label>
                  <input type="text" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-sand outline-none focus:border-moss-light" />
                </div>
              )}
              <div className="mb-5">
                <label className="mb-1.5 block text-xs font-semibold text-sand/60">
                  {tab === 'business' ? 'Tell us about your requirement' : 'How can we help?'}
                </label>
                <textarea required rows={4} className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-sand outline-none focus:border-moss-light" />
              </div>
              <button type="submit" className="w-full rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-95">
                Send Message
              </button>
              {submitted && (
                <p className="mt-3 text-center text-sm text-moss-light">
                  Thanks! Your message has been noted — we'll get back to you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </Section>
    </>
  )
}
