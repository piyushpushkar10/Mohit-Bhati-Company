import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { WASTE_TYPES } from '../data/wasteTypes'
import { SOLUTIONS } from '../data/solutions'
import { SITE_CONFIG } from '../data/siteConfig'
import ModeToggle from './ModeToggle'

const EXPLORE_LINKS = [
  { to: '/about', label: 'About Us' },
  { to: '/careers', label: 'Careers' },
  { to: '/qehs', label: 'QEHS' },
  { to: '/blogs', label: 'Blogs' },
  { to: '/case-studies', label: 'Case Studies & Reports' },
]

function ChevronIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:rotate-180">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function DropdownMenu({ label, items, id, openMenu, setOpenMenu }) {
  const isOpen = openMenu === id
  return (
    <div className="group relative" onMouseEnter={() => setOpenMenu(id)} onMouseLeave={() => setOpenMenu(null)}>
      <button
        onClick={() => setOpenMenu(isOpen ? null : id)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-sand/80 transition hover:text-sand"
      >
        {label}
        <ChevronIcon />
      </button>
      <div
        className={`absolute top-full left-0 min-w-64 rounded-xl border border-white/10 bg-[#0c110d] p-2 shadow-2xl transition-all ${
          isOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block rounded-lg px-4 py-2.5 text-sm text-sand/70 transition hover:bg-white/5 hover:text-sand"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const location = useLocation()
  const navRef = useRef(null)

  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
    setMobileSection(null)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const wasteItems = WASTE_TYPES.map((w) => ({ to: `/waste-types/${w.slug}`, label: w.title }))
  const solutionItems = [
    ...SOLUTIONS.map((s) => ({ to: `/solutions/${s.slug}`, label: s.title })),
    { to: '/refurbished-laptops', label: 'Refurbished Laptops' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-ink/70 backdrop-blur-md">
      <nav ref={navRef} className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="font-display flex items-center gap-2 text-base font-semibold text-sand">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-moss-light to-moss text-sm">
            ♻
          </span>
          {SITE_CONFIG.companyName}
        </Link>

        <div className="hidden items-center lg:flex">
          <NavLink to="/" end className={({ isActive }) => `px-3 py-2 text-sm font-medium transition ${isActive ? 'text-lime' : 'text-sand/80 hover:text-sand'}`}>
            Home
          </NavLink>
          <DropdownMenu label="Waste Type" items={wasteItems} id="waste" openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <DropdownMenu label="Solutions" items={solutionItems} id="solutions" openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <DropdownMenu label="Explore" items={EXPLORE_LINKS} id="explore" openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <NavLink to="/refurbished-laptops" className={({ isActive }) => `px-3 py-2 text-sm font-medium transition ${isActive ? 'text-lime' : 'text-sand/80 hover:text-sand'}`}>
            Refurbished Laptops
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ModeToggle />
          </div>
          <Link
            to="/contact"
            className="hidden rounded-full bg-lime px-5 py-2 text-sm font-semibold text-ink transition hover:brightness-95 sm:inline-block"
          >
            Contact Us
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-sand lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/5 bg-ink/95 px-6 py-4 lg:hidden">
          <Link to="/" className="block py-2.5 text-sm font-medium text-sand">
            Home
          </Link>

          {[
            { id: 'waste', label: 'Waste Type', items: wasteItems },
            { id: 'solutions', label: 'Solutions', items: solutionItems },
            { id: 'explore', label: 'Explore', items: EXPLORE_LINKS },
          ].map((section) => (
            <div key={section.id} className="border-t border-white/5 py-1.5">
              <button
                onClick={() => setMobileSection(mobileSection === section.id ? null : section.id)}
                className="flex w-full items-center justify-between py-2 text-sm font-medium text-sand"
              >
                {section.label}
                <span>{mobileSection === section.id ? '−' : '+'}</span>
              </button>
              {mobileSection === section.id && (
                <div className="pb-2 pl-3">
                  {section.items.map((item) => (
                    <Link key={item.to} to={item.to} className="block py-2 text-sm text-sand/65">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link to="/refurbished-laptops" className="block border-t border-white/5 py-2.5 text-sm font-medium text-sand">
            Refurbished Laptops
          </Link>
          <Link to="/contact" className="mt-3 block rounded-full bg-lime px-5 py-2.5 text-center text-sm font-semibold text-ink">
            Contact Us
          </Link>
          <div className="mt-3 flex justify-center">
            <ModeToggle />
          </div>
        </div>
      )}
    </header>
  )
}
