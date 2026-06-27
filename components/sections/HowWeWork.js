import Flower from '@/components/ui/Flower'
import './HowWeWork.css'

const STEPS = [
  {
    num: 'Step  01',
    title: 'Source',
    desc: 'WHO-GMP audited manufacturing partners with documented quality systems.',
  },
  {
    num: 'Step  02',
    title: 'Curate',
    desc: 'Molecule selection guided by current treatment guidelines and unmet clinical need.',
  },
  {
    num: 'Step  03',
    title: 'Validate',
    desc: 'Batch-level testing, stability oversight and chain-of-custody compliance.',
  },
  {
    num: 'Step  04',
    title: 'Deliver',
    desc: 'Detailing teams trained in scientific accuracy — never persuasion over evidence.',
  },
]

export default function HowWeWork() {
  return (
    <section className="section section--bg how-we-work">
      {/* Decorative rotating flower — bottom right of section */}
      <div className="hww-flower" aria-hidden="true">
        <Flower size={460} atom={false} opacity={0.6} spin spinDuration={70} />
      </div>
      <div className="container">

        <span className="eyebrow">How We Work</span>
        <h2 className="section-title">
          A disciplined pathway from<br />
          molecule to prescription.
        </h2>
        <p className="section-body">
          Every product Suviro Pharmalife Pvt. Ltd. represents passes
          through a four-step pathway built around scientific accuracy,
          regulatory rigour and clinician trust.
        </p>

        <div className="hww-grid">
          {STEPS.map((s) => (
            <div key={s.title} className="hww-card">
              <div className="hww-num">{s.num}</div>
              <div className="hww-title">{s.title}</div>
              <div className="hww-desc">{s.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}