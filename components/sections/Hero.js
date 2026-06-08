import Link from 'next/link'
import Image from 'next/image'
import './Hero.css'

/* ── Actual logo flower image ── */
function LogoFlower() {
  return (
    <Image
      src="/suviro-flower.png"
      alt="Suviro Pharmalife logo flower"
      width={100}
      height={100}
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      priority
    />
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
   
    const hcx     = size / 2
    const hcy     = size / 2
    const petalRx = size * 0.09
    const petalRy = size * 0.21
    const petalCy = size * 0.23
   
    // Control points — same max width as ellipse but sharp pointed tips
    const cpx = petalRx * 1.3
    const cpy = petalRy * 0.65
   
    const d = [
      `M 0 ${petalRy}`,
      `C ${cpx} ${cpy}, ${cpx} ${-cpy}, 0 ${-petalRy}`,
      `C ${-cpx} ${-cpy}, ${-cpx} ${cpy}, 0 ${petalRy}`,
      'Z',
    ].join(' ')
   
    return (
      <svg
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g transform={`translate(${hcx}, ${hcy})`}>
          {petals.map((p) => (
            <path
              key={p.angle}
              d={d}
              fill={p.color}
              opacity={0.65}
              transform={`rotate(${p.angle}) translate(0, ${-petalCy})`}
            />
          ))}
        </g>
      </svg>
    )
  }
// function PetalFlower({ size = 500 }) {
//   const petals = [
//     { angle: 0,   color: '#8CC6A0' },
//     { angle: 30,  color: '#B8D88C' },
//     { angle: 60,  color: '#E8D890' },
//     { angle: 90,  color: '#DDD090' },
//     { angle: 120, color: '#B0B8C8' },
//     { angle: 150, color: '#89C4E1' },
//     { angle: 180, color: '#A0C8E8' },
//     { angle: 210, color: '#7BC8A4' },
//     { angle: 240, color: '#8CC6A0' },
//     { angle: 270, color: '#A8D08D' },
//     { angle: 300, color: '#E8D890' },
//     { angle: 330, color: '#89C4E1' },
//   ]
//   const cx      = size / 2
//   const cy      = size / 2
//   const petalRx = size * 0.09
//   const petalRy = size * 0.21
//   const petalCy = size * 0.23

//   return (
//     <svg
//       viewBox={`0 0 ${size} ${size}`}
//       xmlns="http://www.w3.org/2000/svg"
//       aria-hidden="true"
//     >
//       <g transform={`translate(${cx}, ${cy})`}>
//         {petals.map((p) => (
//           <ellipse
//             key={p.angle}
//             cx={0}
//             cy={-petalCy}
//             rx={petalRx}
//             ry={petalRy}
//             fill={p.color}
//             opacity={0.65}
//             transform={`rotate(${p.angle})`}
//           />
//         ))}
//       </g>
//     </svg>
//   )
// }
// function PetalFlower({ size = 500 }) {
//     const petals = [
//       { angle: 0,   color: '#8CC6A0' },
//       { angle: 30,  color: '#B8D88C' },
//       { angle: 60,  color: '#E8D890' },
//       { angle: 90,  color: '#DDD090' },
//       { angle: 120, color: '#B0B8C8' },
//       { angle: 150, color: '#89C4E1' },
//       { angle: 180, color: '#A0C8E8' },
//       { angle: 210, color: '#7BC8A4' },
//       { angle: 240, color: '#8CC6A0' },
//       { angle: 270, color: '#A8D08D' },
//       { angle: 300, color: '#E8D890' },
//       { angle: 330, color: '#89C4E1' },
//     ]
  
//     const cx = size / 2
//     const cy = size / 2
  
//     // Petal dimensions
//     const petalW  = size * 0.085  // narrower
//     const petalH  = size * 0.28   // shorter
//     const petalCy = size * 0.09   // closer to center
  
//     // Pointed petal shape using bezier curves
//     // Starts at base (bottom point), curves out to sides, meets at tip (top point)
//     const d = `
//       M 0 0
//       C ${petalW} ${-petalH * 0.2},
//         ${petalW} ${-petalH * 0.75},
//         0 ${-petalH}
//       C ${-petalW} ${-petalH * 0.75},
//         ${-petalW} ${-petalH * 0.2},
//         0 0
//       Z
//     `
  
//     return (
//       <svg
//         viewBox={`0 0 ${size} ${size}`}
//         xmlns="http://www.w3.org/2000/svg"
//         aria-hidden="true"
//       >
//         <g transform={`translate(${cx}, ${cy})`}>
//           {petals.map((p) => (
//             <path
//               key={p.angle}
//               d={d}
//               fill={p.color}
//               opacity={0.55}
//               transform={`rotate(${p.angle}) translate(0, ${-petalCy})`}
//             />
//           ))}
//         </g>
//       </svg>
//     )
//   }

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

        {/* Center logo flower - actual logo image */}
        <div className="hero-logo-flower">
          <LogoFlower />
        </div>

        {/* Logo name + tagline */}
        <h1 className="hero-logo-name">Suviro Pharmalife</h1>
        <p className="hero-tagline">Progress Through Science</p>

        {/* Main headline */}
        <h2 className="hero-headline">
          Generic medicines,<br />
          <em>exceptional</em> quality.
        </h2>

        {/* Body copy */}
        <p className="hero-body">
          Suviro Pharmalife Pvt. Ltd. manufactures bioequivalence-tested generics —
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