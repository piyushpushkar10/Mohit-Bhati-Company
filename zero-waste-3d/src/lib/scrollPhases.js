// Scroll journey is divided into four equal bands (0..1 total progress).
// Each 3D scene reads the global progress value and fades itself in/out
// based on where its band sits, so the canvas can crossfade between
// "chapters" of the circular-economy story as the user scrolls.
export const PHASES = {
  hero: { key: 'hero', start: 0, end: 0.25, isFirst: true, isLast: false },
  segregation: { key: 'segregation', start: 0.25, end: 0.5, isFirst: false, isLast: false },
  processing: { key: 'processing', start: 0.5, end: 0.75, isFirst: false, isLast: false },
  products: { key: 'products', start: 0.75, end: 1, isFirst: false, isLast: true },
}

export function smoothstep(edge0, edge1, x) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)))
  return t * t * (3 - 2 * t)
}

// Returns 0..1 opacity for a phase group given the current global progress.
export function opacityForPhase(progress, phase, fade = 0.06) {
  const fadeIn = phase.isFirst ? 1 : smoothstep(phase.start - fade, phase.start + fade, progress)
  const fadeOut = phase.isLast ? 1 : 1 - smoothstep(phase.end - fade, phase.end + fade, progress)
  return Math.min(fadeIn, fadeOut)
}

// Maps global progress into a 0..1 local value within a phase's own band.
export function localProgress(progress, phase) {
  return Math.min(1, Math.max(0, (progress - phase.start) / (phase.end - phase.start)))
}
