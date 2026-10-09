import PageHero from '../components/PageHero'
import Section from '../components/ui/Section'

const POSTS = [
  { date: 'Aug 2026', title: 'What Extended Producer Responsibility actually requires of your brand', icon: '📄' },
  { date: 'Jul 2026', title: '5 things a good waste audit should tell you before you sign a vendor', icon: '🔍' },
  { date: 'Jun 2026', title: 'Why source segregation is the single highest-leverage step in waste management', icon: '🗂️' },
  { date: 'May 2026', title: 'Inside a Materials Recovery Facility: what happens after the truck leaves', icon: '🏭' },
  { date: 'Apr 2026', title: 'Circular textiles 101: how discarded fabric becomes something new', icon: '🧵' },
  { date: 'Mar 2026', title: 'The economics of refurbishing vs. recycling e-waste', icon: '💻' },
]

export default function Blogs() {
  return (
    <>
      <PageHero
        eyebrow="Blogs"
        title="Notes on waste, compliance and the circular economy."
        description="Practical write-ups from our operations, compliance and sustainability teams."
        breadcrumb={[{ label: 'Blogs' }]}
      />
      <Section>
        <div className="mx-auto grid max-w-4xl gap-4">
          {POSTS.map((post) => (
            <div
              key={post.title}
              className="flex items-center gap-5 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-moss-light/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-moss-light/15 text-xl">
                {post.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs text-sand/45">{post.date}</div>
                <h3 className="font-display truncate text-sm font-semibold text-sand sm:text-base">{post.title}</h3>
              </div>
              <span className="shrink-0 text-sm font-semibold text-moss-light">Read →</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
