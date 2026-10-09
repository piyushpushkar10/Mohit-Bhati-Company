export const SOLUTIONS = [
  {
    slug: 'zero-waste-program',
    title: 'Zero Waste Program',
    icon: '♻️',
    tagline: 'End-to-end waste management, built on circular economy principles.',
    description:
      'A complete waste management system for corporates, campuses, tech parks and residential communities — covering audits, source segregation, collection infrastructure, processing, data tracking and certification.',
    features: ['Waste Audits', 'Segregation Infrastructure', 'Collection & Processing', 'Data Tracking & Certification'],
  },
  {
    slug: 'technology-solution',
    title: 'Technology Solution',
    icon: '📡',
    tagline: 'Digital tracking for full waste traceability.',
    description:
      'A digital layer over physical waste operations — weighbridge integration, QR-tagged bins and dashboards that give generators and processors real-time visibility into what’s collected, processed and diverted.',
    features: ['Digital Weighment', 'QR-Tagged Tracking', 'Live Dashboards', 'Compliance Reporting'],
  },
  {
    slug: 'epr-plastics',
    title: 'EPR Plastics',
    icon: '🧾',
    tagline: 'Customized EPR compliance for plastic producers, importers and brand owners.',
    description:
      'CPCB registration support, collection and aggregation of post-consumer plastic packaging, material traceability, and annual return filing — so brands meet their Extended Producer Responsibility obligations end to end.',
    features: ['CPCB Registration', 'Collection & Aggregation', 'Material Traceability', 'Annual Return Filing'],
  },
  {
    slug: 'recycled-products',
    title: 'Recycled Products',
    icon: '🧱',
    tagline: 'Circular-economy-driven goods made from recovered material.',
    description:
      'Eco-boards, recycled paper stationery, furniture, ceramics and upcycled textiles — finished goods manufactured from material recovered through our own waste streams.',
    features: ['Eco-Boards', 'Recycled Stationery', 'Upcycled Furniture', 'Upcycled Textiles'],
  },
  {
    slug: 'social-inclusion',
    title: 'Social Inclusion',
    icon: '🤝',
    tagline: 'Bringing informal waste workers into dignified, formal employment.',
    description:
      'Programs that transition informal sector waste workers into formal roles with fair wages, safety equipment, health and safety certification, and long-term livelihood security.',
    features: ['Formal Employment', 'Health & Safety Training', 'Fair Wages', 'Livelihood Security'],
  },
  {
    slug: 'epr-ewaste',
    title: 'EPR E-Waste',
    icon: '🔌',
    tagline: 'Extended Producer Responsibility compliance for electronics.',
    description:
      'Registration, reverse logistics, collection targets and reporting for electronics producers and importers — covering both bulk consumer devices and IT asset take-back.',
    features: ['Producer Registration', 'Reverse Logistics', 'Collection Targets', 'Regulatory Reporting'],
  },
  {
    slug: 'circular-textiles',
    title: 'Circular Textiles',
    icon: '🧵',
    tagline: 'Turning textile waste into new material streams.',
    description:
      'A dedicated Textile Recovery Facility that grades, processes and channels discarded fabric into upcycled products, industrial wiping cloth, or shredded fibre for reuse.',
    features: ['Textile Recovery Facility', 'Fabric Grading', 'Upcycling', 'Fibre Recovery'],
  },
  {
    slug: 'waste-consultation',
    title: 'Waste Consultation',
    icon: '🧭',
    tagline: 'Infrastructure design and EPR compliance advisory.',
    description:
      'For consulting organizations, developers and facility managers who need expert guidance setting up waste infrastructure or navigating EPR and municipal solid waste regulations.',
    features: ['Infrastructure Design', 'Regulatory Advisory', 'ESG Alignment', 'Vendor Onboarding'],
  },
]

export function getSolutionBySlug(slug) {
  return SOLUTIONS.find((s) => s.slug === slug)
}
