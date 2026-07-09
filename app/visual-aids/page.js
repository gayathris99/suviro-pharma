import CategoryIcon from '@/components/ui/CategoryIcon'
import './visual-aids.css'

export const metadata = {
  title: 'Visual Aids — Suviro Pharmalife',
  description: 'Clear, scientific support for smarter clinical decisions. Evidence-based visual aids and promotional materials designed to give healthcare professionals straightforward, actionable information.',
}

const FEATURES = [
  {
    icon: 'MedicalSearch',
    title: 'Evidence-Based Insights',
    desc: 'Direct product data backed by clinical realities.',
  },
  {
    icon: 'Heart',
    title: 'Therapeutic Value',
    desc: 'Clear breakdowns of how our products help in daily practice.',
  },
  {
    icon: 'Pill1',
    title: 'Usage & Benefit Guides',
    desc: 'Intuitive layouts that highlight patient benefits and correct dosages.',
  },
  {
    icon: 'Stethoscope',
    title: 'No-Fluff Presentations',
    desc: "Clean, scientific formats that respect a physician's time.",
  },
  {
    icon: 'Microscope',
    title: 'Up-to-Date Resources',
    desc: 'Keeping you informed on the latest updates in our portfolio.',
  },
]

export default function VisualAids() {
  return (
    <div className="va-page">

      {/* ── Intro ── */}
      <section className="section va-intro">
        <div className="container">
          <span className="eyebrow">Visual Aids</span>
          <h1 className="section-title va-title">
            Clear, scientific support for smarter clinical decisions.
          </h1>
          <p className="va-lead">
            We believe that clear communication is a vital part of good medicine. Our
            visual aids and promotional materials are designed from the ground up to
            give healthcare professionals straightforward, actionable information.
          </p>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section va-features">
        <div className="container">
          <div className="va-grid">
            {FEATURES.map((f) => (
              <div key={f.title} className="va-card">
                <div className="va-icon">
                  <CategoryIcon name={f.icon} size={24} color="#6366f1" />
                </div>
                <div className="va-card-title">{f.title}</div>
                <div className="va-card-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="section va-closing">
        <div className="container">
          <div className="va-closing-inner">
            <h2 className="va-closing-title">Knowledge. Clarity. Trust.</h2>
            <p className="va-closing-text">
              Supporting the medical community through clear, honest, and
              scientifically grounded engagement.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}