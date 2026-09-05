import './leadership.css'

export const metadata = {
  title: 'Leadership — Suviro Pharmalife',
  description: 'A message from Dr. Rohith Reddy, Founder & Chairman of Suviro Pharmalife — leading with purpose, delivering trust, and an unwavering commitment to quality healthcare.',
}

const PILLARS = [
  { icon: 'shield', title: 'Integrity', desc: 'The right thing, always.' },
  { icon: 'handshake', title: 'Partnerships', desc: 'Stronger together.' },
  { icon: 'award', title: 'Quality', desc: 'Uncompromising standards.' },
]

function PillarIcon({ name }) {
  const c = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (name === 'shield') return (<svg {...c}><path d="M12 3l7 4v5c0 4.5-3 7-7 8-4-1-7-3.5-7-8V7z" /><path d="m9 12 2 2 4-4" /></svg>)
  if (name === 'handshake') return (<svg {...c}><path d="M12 5 9 8H5v6l4 4 3-3 3 3 4-4V8h-4l-3-3z" /><path d="m9 8 3 3 3-3" /></svg>)
  return (<svg {...c}><circle cx="12" cy="9" r="6" /><path d="m9 14-2 7 5-3 5 3-2-7" /></svg>)
}

export default function Leadership() {
  return (
    <div className="leadership-page">

      {/* ── Navy hero — quote-led ── */}
      <section className="lead-hero">
        <div className="lead-hero-glow" />
        <div className="container lead-hero-inner">

          <div className="lead-hero-grid">
            {/* Quote + signature */}
            <div className="lead-hero-text">
              <span className="lead-eyebrow">Message from the Founder &amp; Chairman</span>
              <div className="lead-quote-mark">&ldquo;</div>
              <blockquote className="lead-quote">
                Meaningful progress in healthcare begins with trust, responsibility, and
                an unwavering commitment to <span className="lead-accent">quality.</span>
              </blockquote>
              <div className="lead-sign-name">Dr. Rohith Reddy</div>
              <div className="lead-sign-meta">Founder &amp; Chairman · Suviro Pharmalife Pvt. Ltd.</div>
            </div>

            {/* Portrait */}
            <div className="lead-hero-visual">
              <div className="lead-photo">
                <img src="/founder.jpeg" alt="Dr. Rohith Reddy, Founder & Chairman of Suviro Pharmalife" />
              </div>
            </div>
          </div>

          {/* Pillars strip */}
          <div className="lead-pillars">
            {PILLARS.map((p) => (
              <div key={p.title} className="lead-pillar">
                <div className="lead-pillar-icon"><PillarIcon name={p.icon} /></div>
                <div>
                  <div className="lead-pillar-title">{p.title}</div>
                  <div className="lead-pillar-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Full message ── */}
      <section className="section lead-message-section">
        <div className="container">
          <div className="lead-message">
            <p>
              At Suviro Pharmalife, we believe that meaningful progress in healthcare
              begins with trust, responsibility, and an unwavering commitment to quality.
            </p>
            <p>
              Our purpose is to build a pharmaceutical organization distinguished not
              merely by the products we bring to market, but by the integrity with which
              we build every relationship. In collaboration with trusted and capable
              manufacturing partners, we strive to make quality healthcare solutions
              accessible while maintaining uncompromising standards of professionalism,
              consistency, and ethical conduct.
            </p>
            <p>
              We recognize that in healthcare, credibility is earned over time. Every
              interaction with a healthcare professional, distributor, customer, or
              business partner is an opportunity to demonstrate our commitment to
              reliability, transparency, and excellence. These principles guide our
              decisions and shape the way we conduct our business.
            </p>
            <p>
              Our journey is defined by the confidence entrusted to us by the healthcare
              community. Every milestone is not simply a measure of growth, but a
              reflection of the relationships we have built and the responsibility we
              carry towards those who place their trust in Suviro.
            </p>
            <p>
              As we look ahead, our ambition is clear — to build a respected
              pharmaceutical organization founded on quality, integrity, scientific
              thinking, and enduring partnerships.
            </p>
            <p>
              We will continue to move forward with humility, purpose, and conviction,
              creating value for our partners and contributing meaningfully to better
              healthcare.
            </p>
            <p className="lead-tagline">Progress through Science.</p>
          </div>
        </div>
      </section>

    </div>
  )
}