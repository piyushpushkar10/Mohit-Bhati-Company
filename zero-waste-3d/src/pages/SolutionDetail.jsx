import { Link, useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Section from '../components/ui/Section'
import LinkCard from '../components/ui/LinkCard'
import NotFound from './NotFound'
import { SOLUTIONS, getSolutionBySlug } from '../data/solutions'

export default function SolutionDetail() {
  const { slug } = useParams()
  const solution = getSolutionBySlug(slug)

  if (!solution) return <NotFound />

  const others = SOLUTIONS.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={solution.title}
        description={solution.tagline}
        breadcrumb={[{ label: 'Solutions', to: '/solutions' }, { label: solution.title }]}
      />

      <Section tight>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base text-sand/70 sm:text-lg">{solution.description}</p>
        </div>
      </Section>

      <Section eyebrow="What's Included" title="Core components of this solution">
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {solution.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <span className="text-lime">✓</span>
              <span className="text-sm text-sand/80">{feature}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Related" title="Explore other solutions">
        <div className="grid gap-6 sm:grid-cols-3">
          {others.map((s, i) => (
            <LinkCard key={s.slug} to={`/solutions/${s.slug}`} icon={s.icon} title={s.title} description={s.tagline} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink">
            Get a Quote for This Solution
          </Link>
        </div>
      </Section>
    </>
  )
}
