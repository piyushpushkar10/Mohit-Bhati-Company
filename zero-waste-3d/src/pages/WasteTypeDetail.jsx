import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Section from '../components/ui/Section'
import StatGrid from '../components/ui/StatGrid'
import LinkCard from '../components/ui/LinkCard'
import NotFound from './NotFound'
import { WASTE_TYPES, getWasteTypeBySlug } from '../data/wasteTypes'

export default function WasteTypeDetail() {
  const { slug } = useParams()
  const waste = getWasteTypeBySlug(slug)

  if (!waste) return <NotFound />

  const others = WASTE_TYPES.filter((w) => w.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow="Waste Type"
        title={waste.title}
        description={waste.tagline}
        breadcrumb={[{ label: 'Waste Type', to: '/waste-types' }, { label: waste.title }]}
      />

      <Section tight>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base text-sand/70 sm:text-lg">{waste.description}</p>
        </div>
      </Section>

      {waste.stats?.length > 0 && (
        <Section eyebrow="At a Glance">
          <div className="mx-auto max-w-3xl">
            <StatGrid stats={waste.stats} columns={waste.stats.length > 2 ? 4 : 2} />
          </div>
        </Section>
      )}

      <Section eyebrow="How It Works" title={`Managing ${waste.title.toLowerCase()}, step by step`}>
        <ol className="mx-auto grid max-w-3xl gap-4">
          {waste.process.map((step, i) => (
            <li key={step} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-moss-light/15 text-sm font-semibold text-lime">
                {i + 1}
              </span>
              <span className="pt-1 text-sm text-sand/75 sm:text-base">{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Related" title="Other waste streams we manage">
        <div className="grid gap-6 sm:grid-cols-3">
          {others.map((w, i) => (
            <LinkCard key={w.slug} to={`/waste-types/${w.slug}`} icon={w.icon} title={w.title} description={w.tagline} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink">
            Talk to Us About This Waste Stream
          </Link>
        </div>
      </Section>
    </>
  )
}
