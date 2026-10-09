import PageHero from '../components/PageHero'
import Section from '../components/ui/Section'
import LinkCard from '../components/ui/LinkCard'
import { SOLUTIONS } from '../data/solutions'

export default function SolutionsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Nine ways we close the loop."
        description="From compliance to infrastructure to finished recycled goods — solutions for corporates, campuses, producers and consultants."
        breadcrumb={[{ label: 'Solutions' }]}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <LinkCard key={s.slug} to={`/solutions/${s.slug}`} icon={s.icon} title={s.title} description={s.tagline} index={i} />
          ))}
          <LinkCard
            to="/refurbished-laptops"
            icon="💻"
            title="Refurbished Laptops"
            description="Tested, wiped and refurbished devices given a second life."
            index={SOLUTIONS.length}
          />
        </div>
      </Section>
    </>
  )
}
