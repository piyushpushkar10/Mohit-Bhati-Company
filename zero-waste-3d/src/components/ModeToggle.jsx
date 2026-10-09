import { useEffect } from 'react'
import { useProgress, setMode3D } from '../store/useProgress'

const STORAGE_KEY = 'szw-mode-3d'

export default function ModeToggle() {
  const mode3D = useProgress((s) => s.mode3D)

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved !== null) setMode3D(saved === '1')
  }, [])

  function toggle() {
    const next = !mode3D
    setMode3D(next)
    window.localStorage.setItem(STORAGE_KEY, next ? '1' : '0')
  }

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-sand transition hover:border-white/30 hover:bg-white/10"
      title={mode3D ? 'Switch to Classic Mode (disables WebGL)' : 'Switch to 3D Experience'}
    >
      <span
        className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${
          mode3D ? 'bg-moss-light' : 'bg-white/20'
        }`}
      >
        <span
          className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
            mode3D ? 'translate-x-4' : 'translate-x-1'
          }`}
        />
      </span>
      <span className="hidden sm:inline">{mode3D ? '3D Experience' : 'Classic Mode'}</span>
    </button>
  )
}
