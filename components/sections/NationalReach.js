import Flower from '@/components/ui/Flower'
import './NationalReach.css'

const STATS = [
  { num: '12+',  label: 'States\nCovered'    },
  { num: '120+', label: 'Hospital\nTie-ups'  },
  { num: '800+', label: 'Pharmacy\nPartners' },
  { num: '24/7', label: 'Supply\nSupport'    },
]

export default function NationalReach() {
  return (
    <section className="section section--bg national-reach">
      {/* Decorative rotating flower — top left of section */}
      <div className="nr-flower" aria-hidden="true">
        <Flower size={460} atom={false} opacity={0.6} spin spinDuration={75} reverse />
      </div>
      <div className="container">
        <div className="nr-layout">

          {/* Left — heading */}
          <div className="nr-left">
            <span className="eyebrow">National Reach</span>
            <h2 className="section-title">Present where care happens.</h2>
            <p className="section-body">
              A growing footprint of field representatives, distributor
              partners and clinician networks across India — built
              quietly, region by region.
            </p>
          </div>

          {/* Right — stat cards */}
          <div className="nr-grid">
            {STATS.map((s) => (
              <div key={s.num} className="nr-card">
                <div className="nr-num">{s.num}</div>
                <div className="nr-label">
                  {s.label.split('\n').map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}