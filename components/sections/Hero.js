import Link from 'next/link'
import './Hero.css'

/* ── Logo flower WITH atom (center logo) ── */
function LogoFlower({ size = 80 }) {
  const petals = [
    { angle: 0,   color: '#8CC6A0' },
    { angle: 30,  color: '#B8D88C' },
    { angle: 60,  color: '#E8D890' },
    { angle: 90,  color: '#DDD090' },
    { angle: 120, color: '#B0B8C8' },
    { angle: 150, color: '#89C4E1' },
    { angle: 180, color: '#A0C8E8' },
    { angle: 210, color: '#7BC8A4' },
    { angle: 240, color: '#8CC6A0' },
    { angle: 270, color: '#A8D08D' },
    { angle: 300, color: '#E8D890' },
    { angle: 330, color: '#89C4E1' },
  ]
  const cx      = size / 2
  const cy      = size / 2
  const petalRx = size * 0.09
  const petalRy = size * 0.21
  const petalCy = size * 0.23

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform={`translate(${cx}, ${cy})`}>
        {/* Petals */}
        {petals.map((p) => (
          <ellipse
            key={p.angle}
            cx={0}
            cy={-petalCy}
            rx={petalRx}
            ry={petalRy}
            fill={p.color}
            opacity={0.65}
            transform={`rotate(${p.angle})`}
          />
        ))}

        {/* White centre */}
        <circle
          cx={0} cy={0}
          r={size * 0.115}
          fill="#fff"
          stroke="#E0E0F0"
          strokeWidth={1}
        />

        {/* Atom orbits */}
        <ellipse cx={0} cy={0} rx={size * 0.073} ry={size * 0.031}
          fill="none" stroke="#2E3192" strokeWidth={1.5} transform="rotate(0)" />
        <ellipse cx={0} cy={0} rx={size * 0.073} ry={size * 0.031}
          fill="none" stroke="#2E3192" strokeWidth={1.5} transform="rotate(60)" />
        <ellipse cx={0} cy={0} rx={size * 0.073} ry={size * 0.031}
          fill="none" stroke="#2E3192" strokeWidth={1.5} transform="rotate(120)" />

        {/* Nucleus */}
        <circle cx={0} cy={0} r={size * 0.016} fill="#2E3192" />

        {/* Electrons */}
        <circle cx={size * 0.073}  cy={0}             r={size * 0.01} fill="#2E3192" />
        <circle cx={-size * 0.036} cy={size * 0.062}  r={size * 0.01} fill="#2E3192" />
        <circle cx={-size * 0.036} cy={-size * 0.062} r={size * 0.01} fill="#2E3192" />
      </g>
    </svg>
  )
}

/* ── Decorative flower WITHOUT atom (background only) ── */
function PetalFlower({ size = 500 }) {
  const petals = [
    { angle: 0,   color: '#8CC6A0' },
    { angle: 30,  color: '#B8D88C' },
    { angle: 60,  color: '#E8D890' },
    { angle: 90,  color: '#DDD090' },
    { angle: 120, color: '#B0B8C8' },
    { angle: 150, color: '#89C4E1' },
    { angle: 180, color: '#A0C8E8' },
    { angle: 210, color: '#7BC8A4' },
    { angle: 240, color: '#8CC6A0' },
    { angle: 270, color: '#A8D08D' },
    { angle: 300, color: '#E8D890' },
    { angle: 330, color: '#89C4E1' },
  ]
  const cx      = size / 2
  const cy      = size / 2
  const petalRx = size * 0.09
  const petalRy = size * 0.21
  const petalCy = size * 0.23

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform={`translate(${cx}, ${cy})`}>
        {petals.map((p) => (
          <ellipse
            key={p.angle}
            cx={0}
            cy={-petalCy}
            rx={petalRx}
            ry={petalRy}
            fill={p.color}
            opacity={0.65}
            transform={`rotate(${p.angle})`}
          />
        ))}
      </g>
    </svg>
  )
}

/* ══ Hero section ══ */
export default function Hero() {
  return (
    <section className="hero">

      {/* Background petal cluster — right */}
      <div className="hero-petals-right" aria-hidden="true">
        <PetalFlower size={500} />
      </div>

      {/* Background petal cluster — left bottom */}
      <div className="hero-petals-left" aria-hidden="true">
        <PetalFlower size={340} />
      </div>

      {/* ── Main content ── */}
      <div className="hero-content">

        {/* Center logo flower with atom */}
        <div className="hero-logo-flower">
          <LogoFlower size={80} />
        </div>

        {/* Logo name + tagline */}
        <h1 className="hero-logo-name">Suviro</h1>
        <p className="hero-tagline">Progress Through Science</p>

        {/* Main headline */}
        <h2 className="hero-headline">
          Generic medicines,<br />
          <em>exceptional</em> quality.
        </h2>

        {/* Body copy */}
        <p className="hero-body">
          Suviro Pharma manufactures bioequivalence-tested generics —
          clinically proven, rigorously tested, and accessible to every
          patient across India.
        </p>

        {/* CTA buttons */}
        <div className="hero-btns">
          <Link href="/products" className="hero-btn-primary">
            Browse Products →
          </Link>
          <Link href="/about" className="hero-btn-secondary">
            Learn More About Us →
          </Link>
        </div>
      </div>

      {/* ── Values bar ── */}
      <div className="values-bar">
        <div className="values-bar-inner">

          <div className="value-item">
            <div className="value-icon green">🌿</div>
            <div>
              <p className="value-title">Sustainable Impact</p>
              <p className="value-desc">Solutions that care for people and planet.</p>
            </div>
          </div>

          <div className="value-item">
            <div className="value-icon blue">🤝</div>
            <div>
              <p className="value-title">Trusted Partnerships</p>
              <p className="value-desc">Collaborating for a healthier, brighter future.</p>
            </div>
          </div>

          <div className="value-item">
            <div className="value-icon gold">📈</div>
            <div>
              <p className="value-title">Continuous Progress</p>
              <p className="value-desc">Pushing boundaries to create real-world impact.</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}