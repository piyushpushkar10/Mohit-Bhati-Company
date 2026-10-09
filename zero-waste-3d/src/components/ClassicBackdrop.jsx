// Lightweight, non-WebGL fallback background for "Classic Mode" — pure CSS
// gradients + blur, no canvas, no per-frame JS work.
export default function ClassicBackdrop() {
  return (
    <div id="bg-layer" className="fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full bg-moss/30 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-lime/10 blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-moss-light/15 blur-[130px]" />
    </div>
  )
}
