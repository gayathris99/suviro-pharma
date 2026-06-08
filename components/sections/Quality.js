import './Quality.css'

const certifications = ['WHO-GMP', 'ISO 9001', 'CDSCO', 'USFDA Ready']

const stats = [
  {
    num:   '99.6%',
    label: 'Batch Pass Rate',
    sub:   'Across all formulations',
    color: '#7BC8A4',
    pulse: true,
    cap:   ['rgba(123,200,164,0.4)', 'rgba(46,49,146,0.4)'],
  },
  {
    num:   '0',
    label: 'Regulatory Recalls',
    sub:   'Clean record since inception',
    color: '#2E3192',
    pulse: true,
    cap:   ['rgba(46,49,146,0.4)', 'rgba(137,196,225,0.4)'],
  },
  {
    num:   '48h',
    label: 'Batch Release Time',
    sub:   'From QC clearance to dispatch',
    color: '#89C4E1',
    pulse: true,
    cap:   ['rgba(137,196,225,0.4)', 'rgba(232,216,144,0.4)'],
  },
  {
    num:   '15+',
    label: 'States Served',
    sub:   'Pan-India distribution network',
    color: '#E8D890',
    pulse: true,
    cap:   ['rgba(232,216,144,0.4)', 'rgba(123,200,164,0.4)'],
  },
]

function PetalWatermark() {
  const angles = [0,30,60,90,120,150,180,210,240,270,300,330]
  return (
    <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g transform="translate(160,160)">
        {angles.map((a) => (
          <ellipse key={a} cx={0} cy={-75} rx={28} ry={64}
            fill="#ffffff" opacity={0.8} transform={`rotate(${a})`} />
        ))}
      </g>
    </svg>
  )
}

export default function Quality() {
  return (
    <section className="quality" id="quality">

      <div className="quality-petal" aria-hidden="true">
        <PetalWatermark />
      </div>

      {/* ── Left ── */}
      <div className="quality-left">
        <div className="section-tag">Quality &amp; Compliance</div>
        <h2 className="section-title">
          Zero compromise<br />on <em>standards.</em>
        </h2>
        <p className="quality-body">
          Our manufacturing facility operates under strict GMP conditions
          with continuous monitoring, in-process controls, and full batch
          traceability — from raw material receipt to final release.
        </p>
        <div className="cert-pills">
          {certifications.map((c) => (
            <span key={c} className="cert-pill">{c}</span>
          ))}
        </div>
      </div>

      {/* ── Right: timeline ── */}
      <div className="quality-timeline">
        {stats.map((s) => (
          <div key={s.label} className="timeline-stop">

            {/* Dot column — sits on the vertical line */}
            <div className="timeline-dot-col">
              <div
                className={`timeline-dot ${s.pulse ? 'pulse' : ''}`}
                style={{ background: s.color, color: s.color }}
              />
            </div>

            {/* Stat card */}
            <div className="timeline-card">
              <div className="timeline-num">{s.num}</div>
              <div className="timeline-meta">
                <div className="timeline-label">{s.label}</div>
                <div className="timeline-sub">{s.sub}</div>
              </div>
              <div className="timeline-cap">
                <div style={{ background: s.cap[0] }} />
                <div style={{ background: s.cap[1] }} />
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}