import { motion } from 'framer-motion'
import { SITE_CONFIG } from '../data/siteConfig'

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center px-6 pt-16 text-center">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-lime uppercase backdrop-blur"
      >
        ♻ Since {SITE_CONFIG.foundedYear} — Circular Economy, in Motion
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="font-display max-w-4xl text-4xl leading-tight font-semibold sm:text-5xl md:text-6xl"
      >
        {SITE_CONFIG.companyName}:{' '}
        <span className="gradient-text">Closing the Loop</span> for a Greener Tomorrow.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="mt-6 max-w-xl text-base text-sand/70 sm:text-lg"
      >
        End-to-end waste management, EPR compliance and recycled products — built on
        resource recovery, dignified livelihood and a circular economy.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#solutions"
          className="rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink transition hover:brightness-95"
        >
          Explore Our Solutions
        </a>
        <a
          href="#phase-1"
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-sand transition hover:border-white/40"
        >
          Scroll the Journey ↓
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-[11px] tracking-widest text-sand/40 uppercase"
      >
        <span>Scroll</span>
        <span className="h-8 w-px animate-pulse bg-sand/30" />
      </motion.div>
    </section>
  )
}
