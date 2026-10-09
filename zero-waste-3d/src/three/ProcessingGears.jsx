import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useProgress } from '../store/useProgress'
import { opacityForPhase, PHASES } from '../lib/scrollPhases'

const phase = PHASES.processing
const CHUNK_COUNT = 18
const BELT_LEFT = -3.2
const BELT_RIGHT = 3.2
const SOURCE_COLORS = [new THREE.Color('#c98a4f'), new THREE.Color('#6fb2e8'), new THREE.Color('#f2c94c')]
const RAW_COLOR = new THREE.Color('#9aa3ab')

function Gear({ position, radius, speed, teeth = 10 }) {
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed
  })
  return (
    <mesh ref={ref} position={position}>
      <cylinderGeometry args={[radius, radius, 0.22, teeth]} />
      <meshStandardMaterial color="#7d8790" metalness={0.6} roughness={0.35} transparent opacity={1} />
    </mesh>
  )
}

export default function ProcessingGears() {
  const groupRef = useRef()
  const chunksRef = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const color = useMemo(() => new THREE.Color(), [])
  const seeds = useMemo(
    () =>
      new Array(CHUNK_COUNT).fill(0).map((_, i) => ({
        speed: 0.12 + Math.random() * 0.06,
        offset: i / CHUNK_COUNT,
        source: SOURCE_COLORS[i % SOURCE_COLORS.length],
        z: (Math.random() - 0.5) * 0.5,
      })),
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

    const mesh = chunksRef.current
    seeds.forEach((seed, i) => {
      const t = (state.clock.elapsedTime * seed.speed + seed.offset) % 1
      const x = BELT_LEFT + t * (BELT_RIGHT - BELT_LEFT)
      dummy.position.set(x, 0.32, seed.z)
      dummy.rotation.set(0, state.clock.elapsedTime * 0.6, 0)
      dummy.scale.setScalar(0.22)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
      // colour shifts from sorted waste hues to uniform "raw material" grey
      // as each chunk crosses the midpoint of the belt.
      const mixAmount = THREE.MathUtils.smoothstep ? THREE.MathUtils.smoothstep(t, 0.35, 0.65) : Math.min(1, Math.max(0, (t - 0.35) / 0.3))
      color.copy(seed.source).lerp(RAW_COLOR, mixAmount)
      mesh.setColorAt(i, color)
    })
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  })

  return (
    <group ref={groupRef} position={[0, -0.3, 0]}>
      {/* conveyor belt */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[7.2, 0.14, 1]} />
        <meshStandardMaterial color="#23272b" roughness={0.8} transparent opacity={1} />
      </mesh>
      <mesh position={[BELT_LEFT - 0.3, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 1.05, 16]} />
        <meshStandardMaterial color="#4a5057" metalness={0.5} roughness={0.4} transparent opacity={1} />
      </mesh>
      <mesh position={[BELT_RIGHT + 0.3, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 1.05, 16]} />
        <meshStandardMaterial color="#4a5057" metalness={0.5} roughness={0.4} transparent opacity={1} />
      </mesh>

      <instancedMesh ref={chunksRef} args={[undefined, undefined, CHUNK_COUNT]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={1} roughness={0.5} />
      </instancedMesh>

      <Gear position={[-1.4, 1.1, -0.6]} radius={0.55} speed={0.8} teeth={10} />
      <Gear position={[-0.3, 1.5, -0.6]} radius={0.38} speed={-1.2} teeth={8} />
      <Gear position={[1.5, 1.15, -0.6]} radius={0.5} speed={-0.9} teeth={9} />
    </group>
  )
}
