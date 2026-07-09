import './ValuesBar.css'

const VALUES = [
  { num: '01 / 05', name: 'Quality Without Compromise',     desc: 'We never cut corners when it comes to patient health.' },
  { num: '02 / 05', name: 'Ethical Practices',      desc: 'Transparency and honesty guide every decision we make.'   },
  { num: '03 / 05', name: 'Genuine Empathy',     desc: 'We keep the real-world experiences of patients and healthcare providers at the heart of our business.'           },
  { num: '04 / 05', name: 'Scientific Excellence', desc: 'Every product we back is supported by rigorous research and data.'        },
  { num: '05 / 05', name: 'Sustainable Partnerships', desc: 'We build long-term relationships that strengthen the healthcare community.'        },
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
