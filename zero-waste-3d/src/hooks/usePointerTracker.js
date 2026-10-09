import { useEffect } from 'react'
import { setPointer } from '../store/useProgress'

// Tracks the pointer across the whole window (not just the canvas), since
// the canvas sits fixed behind pointer-events-none HTML content.
export default function usePointerTracker() {
  useEffect(() => {
    function handleMove(e) {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      setPointer(x, y)
    }
    window.addEventListener('pointermove', handleMove, { passive: true })
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])
}
