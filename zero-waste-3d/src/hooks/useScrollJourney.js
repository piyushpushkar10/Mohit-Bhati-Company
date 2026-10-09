import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { setProgress } from '../store/useProgress'

gsap.registerPlugin(ScrollTrigger)

// Drives the global 0..1 scroll progress off a single tall "journey"
// section. `scrub` ties it directly to scroll position (no easing lag),
// which keeps the 3D transitions feeling physically tied to the scrollbar.
export default function useScrollJourney(journeyRef) {
  useEffect(() => {
    const el = journeyRef.current
    if (!el) return

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.4,
      onUpdate: (self) => setProgress(self.progress),
    })

    // Once the journey wrapper has fully scrolled past, fade the fixed
    // background layer (3D canvas or classic gradient) out entirely so it
    // doesn't linger, half-visible, behind the Solutions/Footer sections.
    const fadeOutTrigger = ScrollTrigger.create({
      trigger: el,
      start: 'bottom bottom',
      end: 'bottom top',
      scrub: 0.4,
      onUpdate: (self) => {
        const bg = document.getElementById('bg-layer')
        if (bg) bg.style.opacity = String(1 - self.progress)
      },
    })

    return () => {
      trigger.kill()
      fadeOutTrigger.kill()
    }
  }, [journeyRef])
}
