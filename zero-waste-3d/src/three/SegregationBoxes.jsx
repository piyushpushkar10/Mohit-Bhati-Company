import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useProgress } from '../store/useProgress'
import { opacityForPhase, PHASES } from '../lib/scrollPhases'

const phase = PHASES.segregation

const BINS = [
  { label: 'Wet Waste', x: -2.4, color: '#8a5a2c', particle: '#c98a4f' },
  { label: 'Dry Waste', x: 0, color: '#2e6fb0', particle: '#6fb2e8' },
  { label: 'E-Waste', x: 2.4, color: '#b08a1f', particle: '#f2c94c' },
]
const PARTICLES_PER_BIN = 14
// Local-space (relative to each bin's own group) fall path: from well above
// the open mouth of the bin down to just inside it.
const FALL_START_Y = 3.4
const FALL_END_Y = 0.65

export default function SegregationBoxes() {
  const groupRef = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const instancedRefs = useRef([])
  const seeds = useMemo(
    () =>
      BINS.map(() =>
        new Array(PARTICLES_PER_BIN).fill(0).map(() => ({
          jitter: (Math.random() - 0.5) * 0.55,
          jitterZ: (Math.random() - 0.5) * 0.4,
          speed: 0.5 + Math.random() * 0.4,
          offset: Math.random(),
        }))
      ),
    []
  )

  useFrame((state, delta) => {
    const progress = useProgress.getState().progress
    const opacity = opacityForPhase(progress, phase)
    const group = groupRef.current
    if (!group) return
    group.visible = opacity > 0.01
    if (!group.visible) return

    group.traverse((obj) => {
      if (obj.material && 'opacity' in obj.material) obj.material.opacity = opacity
    })

    BINS.forEach((bin, binIndex) => {
      const mesh = instancedRefs.current[binIndex]
      if (!mesh) return
      seeds[binIndex].forEach((seed, i) => {
        const t = (state.clock.elapsedTime * seed.speed + seed.offset) % 1
        const y = FALL_START_Y - t * (FALL_START_Y - FALL_END_Y)
        dummy.position.set(seed.jitter * (1 - t * 0.6), y, seed.jitterZ)
        const scale = 0.09 + 0.03 * Math.sin(t * Math.PI)
        dummy.scale.setScalar(scale)
        dummy.rotation.set(t * 6, t * 4, 0)
        dummy.updateMatrix()
        mesh.setMatrixAt(i, dummy.matrix)
      })
      mesh.instanceMatrix.needsUpdate = true
    })
  })

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      {BINS.map((bin, i) => (
        <group key={bin.label} position={[bin.x, -0.9, 0]}>
          {/* open-top bin, built from 5 thin panels */}
          <mesh position={[0, 0.3, 0.42]}>
            <boxGeometry args={[1.1, 0.9, 0.06]} />
            <meshStandardMaterial color={bin.color} roughness={0.7} transparent opacity={1} />
          </mesh>
          <mesh position={[0, 0.3, -0.42]}>
            <boxGeometry args={[1.1, 0.9, 0.06]} />
            <meshStandardMaterial color={bin.color} roughness={0.7} transparent opacity={1} />
          </mesh>
          <mesh position={[0.52, 0.3, 0]}>
            <boxGeometry args={[0.06, 0.9, 0.9]} />
            <meshStandardMaterial color={bin.color} roughness={0.7} transparent opacity={1} />
          </mesh>
          <mesh position={[-0.52, 0.3, 0]}>
            <boxGeometry args={[0.06, 0.9, 0.9]} />
            <meshStandardMaterial color={bin.color} roughness={0.7} transparent opacity={1} />
          </mesh>
          <mesh position={[0, -0.16, 0]}>
            <boxGeometry args={[1.1, 0.06, 0.9]} />
            <meshStandardMaterial color={bin.color} roughness={0.7} transparent opacity={1} />
          </mesh>
          <instancedMesh
            ref={(el) => (instancedRefs.current[i] = el)}
            args={[undefined, undefined, PARTICLES_PER_BIN]}
          >
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color={bin.particle} transparent opacity={1} roughness={0.5} />
          </instancedMesh>
        </group>
      ))}
    </group>
  )
}
