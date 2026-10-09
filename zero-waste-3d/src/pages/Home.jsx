import { useRef } from 'react'
import { useProgress } from '../store/useProgress'
import useScrollJourney from '../hooks/useScrollJourney'
import SceneCanvas from '../three/SceneCanvas'
import HeroSection from '../components/HeroSection'
import PhaseSection from '../components/PhaseSection'
import SolutionsGrid from '../components/SolutionsGrid'
import WhoWeServe from '../components/WhoWeServe'
import ImpactSection from '../components/ImpactSection'
import ClientsSection from '../components/ClientsSection'

export default function Home() {
  const mode3D = useProgress((s) => s.mode3D)
  const journeyRef = useRef(null)

  useScrollJourney(journeyRef)

  return (
    <>
      {mode3D && <SceneCanvas />}

      {/* The GSAP ScrollTrigger spans this whole wrapper (hero included), so
          global progress reads 0 at the very top of the page and 1 at the
          end of Phase 03 — matching the four 0..1 bands in scrollPhases.js */}
      <div ref={journeyRef}>
        <HeroSection />

        <PhaseSection
          id="phase-1"
          eyebrow="Phase 01 — Source Segregation"
          title="Clean sorting starts at the source."
          description="Wet waste, dry waste and e-waste are separated right where they're generated, so nothing usable ends up contaminated or landfilled."
          items={['Wet Waste', 'Dry Waste', 'E-Waste']}
        />
        <PhaseSection
          eyebrow="Phase 02 — Material Recovery"
          title="Sorted waste becomes raw material."
          description="At our Materials Recovery Facility, segregated streams are processed, graded and prepared as raw material for the next life cycle."
          items={['Processing', 'Grading', 'Aggregation']}
          align="right"
        />
        <PhaseSection
          eyebrow="Phase 03 — Zero Waste to Landfill"
          title="Raw material, reborn as everyday products."
          description="Recovered material is remade into notebooks, stationery, upcycled pellets and more — closing the loop on the circular economy."
          items={['Recycled Stationery', 'Upcycled Pellets', '98% Landfill Diversion']}
        />
      </div>

      <SolutionsGrid />
      <WhoWeServe />
      <ClientsSection />
      <ImpactSection />
    </>
  )
}
