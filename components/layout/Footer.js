import Link from 'next/link'
import './Footer.css'

function FooterFlower() {
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
  return (
    <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g transform="translate(14,14)">
        {petals.map((p) => (
          <ellipse
            key={p.angle}
            cx={0} cy={-6.5}
            rx={2.5} ry={5.8}
            fill={p.color}
            opacity={0.7}
            transform={`rotate(${p.angle})`}
          />
        ))}
        <circle cx={0} cy={0} r={3.2} fill="#080614" />
      </g>
    </svg>
  )
}

const quickLinks = [
  { label: 'Home',     href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact',  href: '/contact' },
]

const aboutLinks = [
  { label: 'Vision & Mission',   href: '/about/vision-mission' },
  { label: 'Board of Directors', href: '/about/board' },
  { label: 'Top Leadership',     href: '/about/leadership' },
]

const contactDetails = [
  {
    label: 'Plot 42, Pharma SEZ, Hyderabad – 500084',
    href:  '#',
  },
  {
    label: '+91 8142571702',
    href:  'tel:+918142571702',
  },
  {
    label: 'suviropharmalife@gmail.com',
    href:  'mailto:suviropharmalife@gmail.com',
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-flower">
              <FooterFlower />
            </div>
            <div className="footer-logo-text">
              Suviro <span>Pharma</span>
            </div>
          </div>
          <p className="footer-tagline">Progress Through Science</p>
          <p className="footer-desc">
            Premium generic pharmaceuticals — manufactured with
            precision, distributed with care, proudly made in India.
          </p>
          <p className="footer-made">
            🇮🇳 Proudly <span>Made in India</span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About */}
        <div className="footer-col">
          <h4>About</h4>
          <ul>
            {aboutLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            {contactDetails.map((d) => (
              <li key={d.label}>
                <a href={d.href}>{d.label}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2026 Suviro Pharmalife Pvt. Ltd. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
        </div>
      </div>
    </footer>
  )
}