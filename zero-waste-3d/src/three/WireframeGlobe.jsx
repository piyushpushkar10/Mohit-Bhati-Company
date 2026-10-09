import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// A faint, ever-present low-poly globe that drifts in the background across
// the whole scroll journey — a quiet "world" motif tying every chapter
// together without competing with the phase-specific foreground scenes.
export default function WireframeGlobe() {
  const ref = useRef()

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.04
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1
  })

  return (
    <mesh ref={ref} position={[1.6, -0.4, -3.5]} scale={2.4}>
      <icosahedronGeometry args={[1, 2]} />
      <meshBasicMaterial color="#3fae6b" wireframe transparent opacity={0.12} />
    </mesh>
  )
}
