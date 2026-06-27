import Flower from '@/components/ui/Flower'
import './ClinicianVoices.css'

const QUOTES = [
  {
    quote: 'Consistent batch quality and on-time supply — the two things that quietly matter most in chronic-care prescribing.',
    role: 'Consultant Nephrologist · Hyderabad',
  },
  {
    quote: 'Their team speaks the language of evidence. No exaggeration, no theatre — only the data.',
    role: 'Senior Neurologist · Pune',
  },
  {
    quote: "Suviro's gastro line has become a dependable part of our outpatient protocols.",
    role: 'Gastroenterologist · Bengaluru',
  },
  {
    quote: 'Cardio formulations arrive properly stored, properly labelled, properly explained. Rare combination.',
    role: 'Interventional Cardiologist · Mumbai',
  },
]

export default function ClinicianVoices() {
  return (
    <section className="section clinician-voices">
      <div className="container">
        <div className="cv-layout">

          {/* Left — heading */}
          <div className="cv-left">
            <span className="eyebrow eyebrow--chip">Clinician Voices</span>
            <h2 className="section-title">
              Quiet trust, built one prescription at a time.
            </h2>
            <p className="section-body">
              Our relationships with consulting physicians, nephrologists
              and neurologists are anchored in honest science and reliable
              supply — not promotion.
            </p>
          </div>

          {/* Right — quote grid */}
          <div className="cv-right">
            <div className="cv-flower" aria-hidden="true">
              <Flower size={300} atom={false} opacity={0.6} spin spinDuration={70} reverse />
            </div>
            <div className="cv-grid">
              {QUOTES.map((q, i) => (
                <div key={i} className="cv-card">
                  <p className="cv-quote">{`"${q.quote}"`}</p>
                  <div className="cv-role">{q.role}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
