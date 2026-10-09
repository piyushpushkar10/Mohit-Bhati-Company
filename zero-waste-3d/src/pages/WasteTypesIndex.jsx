import PageHero from '../components/PageHero'
import Section from '../components/ui/Section'
import LinkCard from '../components/ui/LinkCard'
import { WASTE_TYPES } from '../data/wasteTypes'

export default function WasteTypesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Waste Type"
        title="Seven waste streams, one circular system."
        description="Every material we handle is collected, sorted and routed differently. Pick a stream to see how it's managed end to end."
        breadcrumb={[{ label: 'Waste Type' }]}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WASTE_TYPES.map((w, i) => (
            <LinkCard
              key={w.slug}
              to={`/waste-types/${w.slug}`}
              icon={w.icon}
              title={w.title}
              description={w.tagline}
              index={i}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
