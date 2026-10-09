import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useProgress } from '../store/useProgress'
import { opacityForPhase, PHASES } from '../lib/scrollPhases'

const PARTICLE_COUNT = 180
const phase = PHASES.hero

function lemniscatePoint(t, scale = 2.5) {
  const denom = 1 + Math.sin(t) * Math.sin(t)
  return new THREE.Vector3((scale * Math.cos(t)) / denom, (scale * Math.sin(t) * Math.cos(t)) / denom, 0)
}

function useLeafGeometry() {
  return useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, -0.6)
    shape.quadraticCurveTo(0.55, -0.2, 0.05, 0.75)
    shape.quadraticCurveTo(-0.5, -0.2, 0, -0.6)
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.05,
      bevelEnabled: true,
      bevelSize: 0.015,
      bevelThickness: 0.015,
      steps: 1,
      curveSegments: 8,
    })
    geo.center()
    return geo
  }, [])
}

export default function InfinityLoop() {
  const groupRef = useRef()
  const ringRef = useRef()
  const particlesRef = useRef()
  const leafRef = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const leafGeometry = useLeafGeometry()

  const curve = useMemo(() => {
    const pts = []
    for (let i = 0; i <= 200; i++) pts.push(lemniscatePoint((i / 200) * Math.PI * 2))
    return new THREE.CatmullRomCurve3(pts, true)
  }, [])

  const tubeGeometry = useMemo(() => new THREE.TubeGeometry(curve, 200, 0.018, 8, true), [curve])

  useFrame((state, delta) => {
    const { progress, pointer } = useProgress.getState()
    const opacity = opacityForPhase(progress, phase)
    const group = groupRef.current
    if (!group) return
    group.visible = opacity > 0.01
    if (!group.visible) return

    group.traverse((obj) => {
      if (obj.material && 'opacity' in obj.material) {
        const dim = obj.userData.dim || 1
        obj.material.opacity = opacity * dim
      }
    })

    ringRef.current.rotation.y += delta * 0.15
    ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.12

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const offset = (i / PARTICLE_COUNT + state.clock.elapsedTime * 0.045) % 1
      dummy.position.copy(curve.getPointAt(offset))
      const pulse = 0.6 + 0.4 * Math.sin(offset * Math.PI * 6 + state.clock.elapsedTime * 2)
      dummy.scale.setScalar(0.045 + 0.03 * pulse)
      dummy.updateMatrix()
      particlesRef.current.setMatrixAt(i, dummy.matrix)
    }
    particlesRef.current.instanceMatrix.needsUpdate = true

    if (leafRef.current) {
      leafRef.current.rotation.z = THREE.MathUtils.lerp(leafRef.current.rotation.z, 0.15 + pointer.x * 0.4, 0.05)
      leafRef.current.rotation.x = THREE.MathUtils.lerp(leafRef.current.rotation.x, -pointer.y * 0.3 + 0.1, 0.05)
      leafRef.current.position.y = 1.75 + Math.sin(state.clock.elapsedTime * 1.1) * 0.09
      leafRef.current.position.x = 2.15 + pointer.x * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      {/* the loop sits back and low, as a soft glow behind the headline
          rather than a hard shape competing with it */}
      <group ref={ringRef} position={[0, -2.3, -3.2]} scale={0.65}>
        <mesh geometry={tubeGeometry} userData={{ dim: 0.4 }}>
          <meshStandardMaterial color="#3fae6b" emissive="#123d22" roughness={0.3} metalness={0.25} transparent opacity={1} />
        </mesh>
        <instancedMesh ref={particlesRef} args={[undefined, undefined, PARTICLE_COUNT]} userData={{ dim: 0.55 }}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#b7ff5c" emissive="#4c7a20" transparent opacity={1} />
        </instancedMesh>
      </group>

      {/* the leaf stays crisp and off to the side, clear of the headline,
          as the dedicated pointer-reactive accent */}
      <mesh ref={leafRef} position={[2.15, 1.75, 0.3]} scale={0.5} rotation={[0.1, 0, 0.15]}>
        <primitive object={leafGeometry} attach="geometry" />
        <meshStandardMaterial color="#2c8a4d" roughness={0.55} transparent opacity={1} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}
