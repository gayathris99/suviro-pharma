import Link from 'next/link'
import './Divisions.css'

const DIVISIONS = [
  {
    name: 'Neuro',
    color: '#bfdbfe',
    tagline: 'Clarity for the mind.',
    desc: 'Neuroprotective and psychotherapeutic formulations supporting cognition, mood and chronic neurological care.',
    href: '/products',
  },
  {
    name: 'Nephro',
    color: '#bbf7d0',
    tagline: 'Care for renal balance.',
    desc: 'Targeted therapies for renal protection, mineral balance and chronic kidney disease management.',
    href: '/products',
  },
  {
    name: 'Cardio',
    color: '#fecaca',
    tagline: 'Strength for the heart.',
    desc: 'Evidence-based cardiovascular molecules covering hypertension, lipid management and heart-failure protocols.',
    href: '/products',
  },
  {
    name: 'Gastro',
    color: '#fde68a',
    tagline: 'Comfort for digestion.',
    desc: 'Solutions across acid control, motility, and hepatic care designed for tolerability and adherence.',
    href: '/products',
  },
]

export default function Divisions() {
  return (
    <section className="section divisions">
      <div className="container">

        <div className="divisions-head">
          <div>
            <span className="eyebrow">Therapeutic Divisions</span>
            <h2 className="section-title">
              Four specialised branches.<br />
              One standard of care.
            </h2>
          </div>
          <Link href="/products" className="divisions-link">
            View full product list →
          </Link>
        </div>

        <div className="divisions-grid">
          {DIVISIONS.map((d) => (
            <Link key={d.name} href={d.href} className="division-card">
              <div
                className="division-circle"
                style={{ background: d.color }}
              />
              <div className="division-name">{d.name}</div>
              <div className="division-tagline">{d.tagline}</div>
              <div className="division-desc">{d.desc}</div>
              <div className="division-cta">Explore →</div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
