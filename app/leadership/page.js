import './leadership.css'

export const metadata = {
  title: 'Leadership — Suviro Pharmalife',
  description: 'Messages from the leadership of Suviro Pharmalife — Dr. Rohith Reddy, Founder & Chairman, and Krishna Chaitanya GVNS, Managing Director — on trust, purpose, and quality healthcare.',
}

function PillarIcon({ name }) {
  const c = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (name === 'shield') return (<svg {...c}><path d="M12 3l7 4v5c0 4.5-3 7-7 8-4-1-7-3.5-7-8V7z" /><path d="m9 12 2 2 4-4" /></svg>)
  if (name === 'handshake') return (<svg {...c}><path d="M12 5 9 8H5v6l4 4 3-3 3 3 4-4V8h-4l-3-3z" /><path d="m9 8 3 3 3-3" /></svg>)
  return (<svg {...c}><circle cx="12" cy="9" r="6" /><path d="m9 14-2 7 5-3 5 3-2-7" /></svg>)
}

const LEADERS = [
  {
    key: 'chairman',
    eyebrow: 'Message from the Founder & Chairman',
    headlineA: 'Progress rooted in',
    headlineAccent: 'trust.',
    intro: 'At Suviro Pharmalife, we believe that meaningful progress in healthcare begins with trust, responsibility, and an unwavering commitment to quality — building an organization distinguished by the integrity with which we build every relationship.',
    pillars: [
      { icon: 'shield', title: 'Responsibility', desc: 'A duty of care to those who trust us.' },
      { icon: 'handshake', title: 'Scientific Thinking', desc: 'Decisions grounded in evidence and rigor.' },
      { icon: 'award', title: 'Enduring Growth', desc: 'Built on relationships, not just milestones.' },
    ],
    name: 'Dr. Rohith Reddy',
    role: 'Founder & Chairman',
    company: 'Suviro Pharmalife Pvt. Ltd.',
    photo: '/founder.jpeg',
  },
  {
    key: 'md',
    eyebrow: 'Message from the Managing Director',
    headlineA: 'Leading with purpose.',
    headlineAccent: 'Delivering trust.',
    intro: 'At Suviro Pharmalife, our commitment goes beyond business. We are dedicated to building ethical partnerships, delivering quality healthcare solutions, and creating a healthier future for all.',
    pillars: [
      { icon: 'shield', title: 'Integrity', desc: 'We do the right thing, always.' },
      { icon: 'handshake', title: 'Partnership', desc: 'Stronger together, for a better tomorrow.' },
      { icon: 'award', title: 'Excellence', desc: 'Committed to quality in everything we do.' },
    ],
    name: 'Krishna Chaitanya GVNS',
    role: 'Managing Director',
    company: 'Suviro Pharmalife Private Limited',
    photo: '/md.jpeg',
  },
]

export default function Leadership() {
  return (
    <div className="leadership-page">

      {/* Page intro */}
      <section className="section lead-page-head">
        <div className="container">
          <span className="eyebrow">Leadership</span>
          <h1 className="section-title">Guided by purpose and principle.</h1>
        </div>
      </section>

      {LEADERS.map((L, i) => (
        <section key={L.key} className={`section leader-block ${i % 2 === 1 ? 'leader-block--alt' : ''}`}>
          <div className="container">
            <div className="leader-grid">

              {/* Text */}
              <div className="leader-text">
                <span className="leader-eyebrow">{L.eyebrow}</span>
                <span className="leader-rule" />
                <h2 className="leader-headline">
                  {L.headlineA}<br />
                  <span className="leader-accent">{L.headlineAccent}</span>
                </h2>
                <p className="leader-intro">{L.intro}</p>

                <div className="leader-pillars">
                  {L.pillars.map((p) => (
                    <div key={p.title} className="leader-pillar">
                      <div className="leader-pillar-icon"><PillarIcon name={p.icon} /></div>
                      <div>
                        <div className="leader-pillar-title">{p.title}</div>
                        <div className="leader-pillar-desc">{p.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="leader-signature">
                  <div className="leader-sign-name">{L.name}</div>
                  <div className="leader-sign-role">{L.role}</div>
                  <div className="leader-sign-company">{L.company}</div>
                </div>
              </div>

              {/* Portrait */}
              <div className="leader-visual">
                <div className="leader-photo">
                  <img src={L.photo} alt={`${L.name}, ${L.role} of Suviro Pharmalife`} />
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}

    </div>
  )
}