import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '../data/siteConfig'

const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { to: '/about', label: 'About Us' },
      { to: '/careers', label: 'Careers' },
      { to: '/blogs', label: 'Blogs' },
      { to: '/case-studies', label: 'Case Studies' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { to: '/solutions/zero-waste-program', label: 'Zero Waste Program' },
      { to: '/solutions/epr-plastics', label: 'EPR Plastics' },
      { to: '/solutions/recycled-products', label: 'Recycled Products' },
      { to: '/refurbished-laptops', label: 'Refurbished Laptops' },
    ],
  },
  {
    title: 'Waste Types',
    links: [
      { to: '/waste-types/dry-waste', label: 'Dry Waste' },
      { to: '/waste-types/e-waste', label: 'E-Waste' },
      { to: '/waste-types/plastic-waste', label: 'Plastic Waste' },
      { to: '/waste-types', label: 'View All →' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 pt-16 pb-8">
      <div className="mx-auto grid max-w-6xl gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="font-display flex items-center gap-2 text-base font-semibold text-sand">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-moss-light to-moss text-sm">
              ♻
            </span>
            {SITE_CONFIG.companyName}
          </Link>
          <p className="mt-4 max-w-xs text-sm text-sand/55">
            A business enterprise driven by resource recovery, dignified livelihood and a circular economy.
          </p>
          <div className="mt-5 space-y-1 text-sm text-sand/55">
            <p>{SITE_CONFIG.hq.address}</p>
            <a href={SITE_CONFIG.phoneHref} className="block hover:text-sand">
              {SITE_CONFIG.phone}
            </a>
            <a href={SITE_CONFIG.emailHref} className="block hover:text-sand">
              {SITE_CONFIG.email}
            </a>
          </div>
          <div className="mt-4 space-y-0.5 text-xs text-sand/40">
            <p>GSTIN: {SITE_CONFIG.gstin}</p>
            <p>Udyam Reg. No.: {SITE_CONFIG.udyam}</p>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-xs font-semibold tracking-widest text-sand/40 uppercase">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-sand/60 hover:text-sand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center border-t border-white/10 pt-6 text-xs text-sand/40">
        <span>
          © {new Date().getFullYear()} {SITE_CONFIG.companyName}. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
