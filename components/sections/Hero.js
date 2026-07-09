import Link from 'next/link'
import Flower from '@/components/ui/Flower'
import './Hero.css'

const STATS = [
  { num: '4',    label: 'Therapeutic\nDivisions'  },
  { num: '25+',  label: 'Specialty\nMolecules'    },
  { num: '100%', label: 'Ethically\nProcured'     },
]

export default function Hero() {
  return (
    <section className="hero">

      {/* ── Pastel blobs ── */}
      <div className="hero-blob hero-blob--1" />
      <div className="hero-blob hero-blob--2" />
      <div className="hero-blob hero-blob--3" />
      <div className="hero-blob hero-blob--4" />

      {/* ── Background petal flowers ── */}
      <div className="hero-bg-flower hero-bg-flower--left">
        <Flower size={620} atom={false} opacity={0.6} spin spinDuration={90} reverse />
      </div>
      <div className="hero-bg-flower hero-bg-flower--right">
        <Flower size={460} atom={false} opacity={0.6} spin spinDuration={70} />
      </div>

      {/* ── Content ── */}
      <div className="hero-inner">

        {/* Left — text */}
        <div className="hero-text">
          <p className="hero-eyebrow">Your Trusted Pharmaceutical Marketing Partner</p>
          <h1 className="hero-headline">
            Delivering{' '}
            <span className="hero-accent">Quality Healthcare</span> with{' '}
            <span className="hero-accent">Integrity.</span>
          </h1>
          <p className="hero-body">
          At Suviro, we are a pharmaceutical marketing company built on trust, ethics, and science —
          delivering dependable therapeutic solutions across Neurology, Nephrology,
          Cardiology, and Gastroenterology.
          </p>
          <div className="hero-buttons">
            <Link href="/products" className="hero-btn hero-btn--fill">
              Explore Our Products
            </Link>
            <Link href="/about" className="hero-btn hero-btn--outline">
              Our Philosophy
            </Link>
          </div>
          <div className="hero-stats">
            {STATS.map((s) => (
              <div key={s.num} className="hero-stat">
                <div className="hero-stat-num">{s.num}</div>
                <div className="hero-stat-label">
                  {s.label.split('\n').map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo + badge */}
        <div className="hero-visual">
          <div className="hero-photo">
            <img
              src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=900&q=85"
              alt="Pharmaceutical laboratory"
            />
          </div>
          <div className="hero-badge">
            <Flower size={38} spin spinDuration={30} />
            <span className="hero-badge-dot" />
            <div>
              <div className="hero-badge-main">Trusted by clinicians</div>
              <div className="hero-badge-sub">Across 12+ states</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}