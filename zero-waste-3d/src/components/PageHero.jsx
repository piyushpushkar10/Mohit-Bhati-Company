import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PageHero({ eyebrow, title, description, breadcrumb }) {
  return (
    <section className="relative px-6 pt-36 pb-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl"
      >
        {breadcrumb && (
          <p className="mb-4 text-xs text-sand/45">
            <Link to="/" className="hover:text-sand/70">
              Home
            </Link>
            {breadcrumb.map((crumb) => (
              <span key={crumb.label}>
                {' '}
                / {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-sand/70">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-sand/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </p>
        )}
        {eyebrow && (
          <span className="mb-4 inline-block text-xs font-medium tracking-widest text-lime uppercase">{eyebrow}</span>
        )}
        <h1 className="font-display text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl">{title}</h1>
        {description && <p className="mt-5 text-base text-sand/65 sm:text-lg">{description}</p>}
      </motion.div>
    </section>
  )
}
