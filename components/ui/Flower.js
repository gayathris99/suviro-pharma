/**
 * Flower — the Suviro rotating petal logo.
 *
 * Reused across the site (navbar, hero backgrounds, badge, footer).
 * Built from 12 sharp bezier petals; optional atom centre.
 *
 * Props:
 *   size    – px (number)                  default 52
 *   atom    – show atom centre (boolean)   default true
 *   opacity – petal opacity (number)       default 0.72
 *   spin    – animate rotation (boolean)   default false
 *   spinDuration – seconds (number)        default 30
 *   reverse – spin counter-clockwise       default false
 *   className – extra classes (string)
 *   style   – inline style override
 */

const PETALS = [
    { color: '#8CC6A0', angle: 0   },
    { color: '#B8D88C', angle: 30  },
    { color: '#E8D890', angle: 60  },
    { color: '#DDD090', angle: 90  },
    { color: '#B0B8C8', angle: 120 },
    { color: '#89C4E1', angle: 150 },
    { color: '#A0C8E8', angle: 180 },
    { color: '#7BC8A4', angle: 210 },
    { color: '#8CC6A0', angle: 240 },
    { color: '#A8D08D', angle: 270 },
    { color: '#E8D890', angle: 300 },
    { color: '#89C4E1', angle: 330 },
  ]
  
  export default function Flower({
    size = 52,
    atom = true,
    opacity = 0.72,
    spin = false,
    spinDuration = 30,
    reverse = false,
    className = '',
    style = {},
  }) {
    const c = size / 2
  
    // Petal geometry — sharp bezier tips
    const petalRx = size * 0.09
    const petalRy = size * 0.21
    const petalCy = size * 0.23
    const cpx = petalRx * 1.3
    const cpy = petalRy * 0.65
  
    const petalPath = [
      `M 0 ${petalRy}`,
      `C ${cpx} ${cpy}, ${cpx} ${-cpy}, 0 ${-petalRy}`,
      `C ${-cpx} ${-cpy}, ${-cpx} ${cpy}, 0 ${petalRy}`,
      'Z',
    ].join(' ')
  
    // Atom geometry
    const atomR  = size * 0.115
    const orbRx  = size * 0.073
    const orbRy  = size * 0.031
  
    const spinStyle = spin
      ? {
          animation: `spin ${spinDuration}s linear infinite${reverse ? ' reverse' : ''}`,
        }
      : {}
  
    return (
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={className}
        style={{ display: 'block', ...spinStyle, ...style }}
      >
        <g transform={`translate(${c}, ${c})`}>
          {/* Petals */}
          {PETALS.map((p) => (
            <path
              key={p.angle}
              d={petalPath}
              fill={p.color}
              opacity={opacity}
              transform={`rotate(${p.angle}) translate(0, ${-petalCy})`}
            />
          ))}
  
          {/* Atom centre */}
          {atom && (
            <>
              <circle
                cx={0} cy={0} r={atomR}
                fill="#ffffff"
                stroke="#e8eef5"
                strokeWidth={0.6}
              />
              <ellipse cx={0} cy={0} rx={orbRx} ry={orbRy}
                fill="none" stroke="#2e3192" strokeWidth={1.1}
                transform="rotate(0)" />
              <ellipse cx={0} cy={0} rx={orbRx} ry={orbRy}
                fill="none" stroke="#2e3192" strokeWidth={1.1}
                transform="rotate(60)" />
              <ellipse cx={0} cy={0} rx={orbRx} ry={orbRy}
                fill="none" stroke="#2e3192" strokeWidth={1.1}
                transform="rotate(120)" />
              <circle cx={0} cy={0} r={size * 0.015} fill="#2e3192" />
            </>
          )}
        </g>
      </svg>
    )
  }