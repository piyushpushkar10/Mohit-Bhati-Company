import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import WireframeGlobe from './WireframeGlobe'
import InfinityLoop from './InfinityLoop'
import SegregationBoxes from './SegregationBoxes'
import ProcessingGears from './ProcessingGears'
import ProductTransform from './ProductTransform'

export default function SceneCanvas() {
  return (
    <div id="bg-layer" className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0.2, 6.2], fov: 42 }}
      >
        <color attach="background" args={['#0b0f0c']} />
        <fog attach="fog" args={['#0b0f0c', 8, 16]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 5]} intensity={1.1} color="#eafbe8" />
        <pointLight position={[-3, -2, 3]} intensity={25} color="#b7ff5c" />

        <Suspense fallback={null}>
          <WireframeGlobe />
          <InfinityLoop />
          <SegregationBoxes />
          <ProcessingGears />
          <ProductTransform />
        </Suspense>
      </Canvas>
    </div>
  )
}
