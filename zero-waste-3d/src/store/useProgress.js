import { create } from 'zustand'

// Shared, render-free state: R3F components read this imperatively inside
// useFrame (via useProgress.getState()) instead of subscribing, so 60fps
// scroll/pointer updates never trigger React re-renders.
export const useProgress = create(() => ({
  progress: 0,
  pointer: { x: 0, y: 0 },
  mode3D: true,
}))

export const setProgress = (p) => useProgress.setState({ progress: p })
export const setPointer = (x, y) => useProgress.setState({ pointer: { x, y } })
export const setMode3D = (v) => useProgress.setState({ mode3D: v })
