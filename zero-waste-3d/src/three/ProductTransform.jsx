import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useProgress } from '../store/useProgress'
import { opacityForPhase, localProgress, PHASES } from '../lib/scrollPhases'

const phase = PHASES.products

// Raw grey blocks crossfade into three finished, recycled-good silhouettes
// as the local progress within this phase advances — a notebook, a pen,
// and upcycled pellets — each popping in with a little spring/rotation.
const RAW_POSITIONS = [-1.4, 0, 1.4]

export default function ProductTransform() {
  const groupRef = useRef()
  const rawRefs = useRef([])
  const notebookRef = useRef()
  const penRef = useRef()
  const pelletsRef = useRef()

  useFrame((state, delta) => {
    const progress = useProgress.getState().progress
    const opacity = opacityForPhase(progress, phase)
    const group = groupRef.current
    if (!group) return
    group.visible = opacity > 0.01
    if (!group.visible) return

    group.traverse((obj) => {
      if (obj.material && 'opacity' in obj.material) obj.material.opacity = obj.userData.baseOpacity !== undefined ? obj.userData.baseOpacity * opacity : opacity
    })

    const local = localProgress(progress, phase)
    const rawFade = 1 - THREE.MathUtils.smoothstep(local, 0.15, 0.55)
    const productReveal = THREE.MathUtils.smoothstep(local, 0.35, 0.85)

    rawRefs.current.forEach((mesh, i) => {
      if (!mesh) return
      mesh.userData.baseOpacity = rawFade
      mesh.visible = rawFade > 0.02
      mesh.scale.setScalar(0.55 * rawFade + 0.001)
      mesh.rotation.y = state.clock.elapsedTime * 0.4 + i
    })

    const t = state.clock.elapsedTime
    if (notebookRef.current) {
      notebookRef.current.userData.baseOpacity = productReveal
      notebookRef.current.visible = productReveal > 0.02
      notebookRef.current.scale.set(0.9 * productReveal, 1.1 * productReveal, 0.15 * productReveal)
      notebookRef.current.rotation.y = Math.sin(t * 0.6) * 0.25
    }
    if (penRef.current) {
      penRef.current.userData.baseOpacity = productReveal
      penRef.current.visible = productReveal > 0.02
      penRef.current.scale.set(productReveal, productReveal, productReveal)
      penRef.current.rotation.z = Math.PI / 2.4 + Math.sin(t * 0.8) * 0.1
    }
    if (pelletsRef.current) {
      pelletsRef.current.userData.baseOpacity = productReveal
      pelletsRef.current.visible = productReveal > 0.02
      pelletsRef.current.scale.setScalar(productReveal)
      pelletsRef.current.rotation.y = t * 0.5
    }
  })

  return (
    <group ref={groupRef} position={[1.3, 0.1, 0]}>
      {RAW_POSITIONS.map((x, i) => (
        <mesh key={x} ref={(el) => (rawRefs.current[i] = el)} position={[x, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#9aa3ab" roughness={0.7} transparent opacity={1} />
        </mesh>
      ))}

      {/* recycled notebook */}
      <mesh ref={notebookRef} position={[-1.4, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#f4f1e8" roughness={0.8} transparent opacity={1} />
      </mesh>

      {/* recycled pen */}
      <mesh ref={penRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 1.4, 10]} />
        <meshStandardMaterial color="#3fae6b" roughness={0.4} metalness={0.15} transparent opacity={1} />
      </mesh>

      {/* upcycled plastic pellets */}
      <group ref={pelletsRef} position={[1.4, 0, 0]}>
        {[...Array(9)].map((_, i) => {
          const angle = (i / 9) * Math.PI * 2
          return (
            <mesh key={i} position={[Math.cos(angle) * 0.4, Math.sin(angle) * 0.4, 0]}>
              <icosahedronGeometry args={[0.16, 0]} />
              <meshStandardMaterial color={i % 2 ? '#b7ff5c' : '#3fae6b'} roughness={0.4} transparent opacity={1} />
            </mesh>
          )
        })}
      </group>
    </group>
  )
}
