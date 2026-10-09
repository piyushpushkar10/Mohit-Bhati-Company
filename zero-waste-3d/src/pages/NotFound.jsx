import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-16 text-center">
      <span className="font-display gradient-text text-6xl font-bold">404</span>
      <h1 className="font-display mt-4 text-2xl font-semibold text-sand">This page got recycled.</h1>
      <p className="mt-2 max-w-sm text-sm text-sand/60">
        The page you're looking for doesn't exist, or has moved somewhere else in the loop.
      </p>
      <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-semibold text-ink">
        Back to Home
      </Link>
    </section>
  )
}
