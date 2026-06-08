import Image from 'next/image'
import './About.css'

const features = [
  { label: 'Bioequivalence Tested',    color: '#2E3192' },
  { label: 'In-House Manufacturing',   color: '#7BC8A4' },
  { label: 'Transparent Pricing',      color: '#89C4E1' },
]

const stats = [
  { num: '2026', label: 'Year founded',           accent: true  },
  { num: '200+', label: 'Formulations',            accent: false },
  { num: '50+',  label: 'Distribution partners',   accent: false },
]

export default function About() {
  return (
    <section className="about" id="about">

      {/* ── Left: text ── */}
      <div className="about-text">
        <div className="section-tag">About Suviro</div>

        <h2 className="section-title">
          Built on science.<br />
          Driven by <em>purpose.</em>
        </h2>

        <p className="about-body">
          We founded Suviro on a simple belief — that high-quality medicine
          shouldn&apos;t cost more than it should. Every formulation in our
          portfolio undergoes rigorous bioequivalence testing and multi-stage
          quality control before it reaches a single pharmacy shelf.
        </p>

        <div className="about-features">
          {features.map((f) => (
            <div key={f.label} className="about-feat">
              <div
                className="about-feat-dot"
                style={{ background: f.color }}
              />
              <span className="about-feat-text">{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: image + stats ── */}
      <div className="about-visual">

        {/* Lab image */}
        <div className="about-image">
          <Image
            src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=800&q=80"
            alt="Suviro Pharma laboratory"
            width={800}
            height={260}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            unoptimized
          />
        </div>

        {/* Stat cards */}
        <div className="about-stats">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`about-stat ${s.accent ? 'accent' : ''}`}
            >
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}