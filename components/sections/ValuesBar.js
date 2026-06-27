import './ValuesBar.css'

const VALUES = [
  { num: '01 / 04', name: 'Quality',     desc: 'Audited manufacturing, batch-tested supply.' },
  { num: '02 / 04', name: 'Ethics',      desc: 'Transparent marketing rooted in evidence.'   },
  { num: '03 / 04', name: 'Empathy',     desc: 'Behind every molecule, a patient.'           },
  { num: '04 / 04', name: 'Sensibility', desc: 'Restraint, accuracy, accountability.'        },
]

export default function ValuesBar() {
  return (
    <div className="values-bar">
      <div className="values-grid">
        {VALUES.map((v) => (
          <div key={v.num} className="value-item">
            <div className="value-num">{v.num}</div>
            <div className="value-name">{v.name}</div>
            <div className="value-desc">{v.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
