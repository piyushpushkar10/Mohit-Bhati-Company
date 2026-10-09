import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

// Playful pointer-driven 3D tilt: rotateX/Y derive from cursor position
// within the card, spring-smoothed so it feels tactile rather than jumpy.
// When `to` is given the whole card becomes a router link.
export default function SolutionCard({ icon, title, description, tags, to }) {
  const cardRef = useRef(null)
  const Wrapper = to ? MotionLink : motion.div
  const linkProps = to ? { to } : {}
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig)

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <Wrapper
      ref={cardRef}
      {...linkProps}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.03 }}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors hover:border-moss-light/40"
    >
      <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-moss-light/10 blur-2xl transition-opacity group-hover:opacity-100" />
      <div
        className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-moss-light/15 text-2xl"
        style={{ transform: 'translateZ(40px)' }}
      >
        {icon}
      </div>
      <h3 className="font-display mb-3 text-xl font-semibold" style={{ transform: 'translateZ(30px)' }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-sand/65" style={{ transform: 'translateZ(20px)' }}>
        {description}
      </p>
      {tags && (
        <ul className="mt-5 flex flex-wrap gap-2" style={{ transform: 'translateZ(20px)' }}>
          {tags.map((tag) => (
            <li key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs text-sand/70">
              {tag}
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  )
}
