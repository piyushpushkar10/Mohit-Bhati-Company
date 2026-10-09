import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import WireframeGlobe from './WireframeGlobe'

// A cheap, single-object background for every non-Home page — keeps the
// "3D Experience" toggle meaningful sitewide without paying for the full
// scroll-journey scene (bins, gears, product morphs) on pages that don't use it.
export default function AmbientCanvas() {
  return (
    <div id="bg-layer" className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 6], fov: 42 }}>
        <color attach="background" args={['#0b0f0c']} />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <WireframeGlobe />
        </Suspense>
      </Canvas>
    </div>
  )
}
