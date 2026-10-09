export const WASTE_TYPES = [
  {
    slug: 'dry-waste',
    title: 'Dry Waste',
    icon: '📦',
    tagline: 'Segregated, sorted and sent back into the material stream.',
    description:
      'Paper, cardboard, plastics, metal and glass collected from homes, offices and campuses are sorted at source and aggregated at our Materials Recovery Facilities for onward recycling.',
    stats: [
      { label: 'Dry Waste Recycled', value: '65.4%' },
      { label: 'Segregation at Source', value: '100%' },
    ],
    process: [
      'Source segregation into wet, dry and reject streams',
      'Collection and transport to the nearest MRF',
      'Manual and mechanical sorting by material type',
      'Baling and dispatch to certified recyclers',
    ],
  },
  {
    slug: 'e-waste',
    title: 'E-Waste',
    icon: '💻',
    tagline: 'Responsible collection, refurbishment and recycling of electronics.',
    description:
      'End-of-life laptops, phones, batteries and appliances are collected under EPR compliance, tested for reuse potential, and dismantled through authorised recyclers when refurbishment isn’t viable.',
    stats: [
      { label: 'E-Waste Recycled', value: '100%' },
      { label: 'Devices Refurbished Annually', value: '1,000+' },
    ],
    process: [
      'Doorstep or bulk pickup from generators',
      'Data wiping and functional testing',
      'Refurbishment for reuse where possible',
      'Certified dismantling and material recovery otherwise',
    ],
  },
  {
    slug: 'glass-waste',
    title: 'Glass Waste',
    icon: '🍾',
    tagline: 'Bottles and glassware diverted from landfill and crushed for reuse.',
    description:
      'Glass is collected separately from other dry waste streams, sorted by colour and condition, and routed to glass processors for re-melting into new containers.',
    stats: [{ label: 'Landfill Diversion', value: '98%' }],
    process: ['Separate collection from mixed dry waste', 'Sorting by colour and grade', 'Crushing and dispatch to processors'],
  },
  {
    slug: 'food-waste',
    title: 'Food Waste',
    icon: '🍃',
    tagline: 'Composted or bio-methanated instead of landfilled.',
    description:
      'Kitchen and canteen waste from residential communities, tech parks and campuses is composted on-site or sent to bio-methanation units, turning organic waste into manure or energy.',
    stats: [{ label: 'Food Waste Composted', value: '100%' }],
    process: ['On-site segregation of wet waste', 'Composting or bio-methanation setup', 'Manure/energy output reused on-site'],
  },
  {
    slug: 'textile-waste',
    title: 'Textile Waste',
    icon: '🧵',
    tagline: 'Circular textiles — from discarded fabric to upcycled goods.',
    description:
      'Old garments and fabric offcuts are collected, graded and processed through our Textile Recovery Facility into upcycled products, industrial wiping cloth or shredded fibre.',
    stats: [{ label: 'Facilities', value: 'Bengaluru & Goa' }],
    process: ['Collection from brands, retailers and communities', 'Grading by fabric type and condition', 'Upcycling, shredding or fibre recovery'],
  },
  {
    slug: 'tyre-waste',
    title: 'Tyre Waste',
    icon: '🛞',
    tagline: 'End-of-life tyres processed for material recovery.',
    description:
      'Used tyres are collected from generators and channelled to authorised processors for shredding and material recovery, keeping them out of open dumping and landfills.',
    stats: [{ label: 'Diverted from Landfill', value: '98%' }],
    process: ['Collection from fleet operators and workshops', 'Transport to authorised processors', 'Shredding and material recovery'],
  },
  {
    slug: 'plastic-waste',
    title: 'Plastic Waste',
    icon: '♻️',
    tagline: 'Plastic EPR compliance, collection and recycling at scale.',
    description:
      'Multi-layered and rigid plastic packaging is collected under Extended Producer Responsibility programs, aggregated, and sent for recycling or co-processing.',
    stats: [{ label: 'UT & States Covered', value: '85%' }],
    process: ['Collection under brand EPR obligations', 'Aggregation and quality sorting', 'Recycling or co-processing dispatch'],
  },
]

export function getWasteTypeBySlug(slug) {
  return WASTE_TYPES.find((w) => w.slug === slug)
}
