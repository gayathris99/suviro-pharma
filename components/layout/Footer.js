import Link from 'next/link'
import Flower from '@/components/ui/Flower'
import './Footer.css'

const NAV_LINKS = [
  { label: 'Home',        href: '/'            },
  { label: 'About',       href: '/about'       },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Products',    href: '/products'    },
  { label: 'Careers',     href: '/careers'     },
]

const REACH = [
  { label: 'suviropharmalife@gmail.com', href: 'mailto:suviropharmalife@gmail.com' },
  { label: '+91 8142571702',             href: 'tel:+918142571702'                 },
  { label: 'Suviro Pharmalife Pvt. Ltd, India', href: '#'                          },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Flower size={42} spin spinDuration={30} />
              <div>
                <div className="footer-name">Suviro</div>
                <div className="footer-sub">Progress Through Science</div>
              </div>
            </div>
            <p className="footer-desc">
              A pharmaceutical marketing company committed to quality,
              ethics and empathy across Neuro, Nephro, Cardio and Gastro
              therapeutic divisions.
            </p>
          </div>

          {/* Navigate */}
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div className="footer-col">
            <h4>Reach Us</h4>
            <ul>
              {REACH.map((r) => (
                <li key={r.label}><a href={r.href}>{r.label}</a></li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Compliance row ── */}
        <div className="footer-compliance">
          <div className="footer-compliance-col">
            <h4>Pharmacovigilance &amp; Patient Safety</h4>
            <p>
              Patient well-being is our highest priority. We maintain a dedicated
              pharmacovigilance cell to monitor the safety and efficacy of our
              products post-market.
            </p>
            <p className="footer-safety">
              <strong>Report an Adverse Event:</strong> To report a suspected side
              effect or quality issue, email{' '}
              <a href="mailto:suviropharmalife@gmail.com">suviropharmalife@gmail.com</a>{' '}
              or call{' '}
              <a href="tel:+918142571702">+91 8142571702</a>.
            </p>
          </div>
          <div className="footer-compliance-col">
            <h4>Medical Disclaimer</h4>
            <p>
              The information provided on this website is for educational and
              informational purposes only and is intended strictly for healthcare
              professionals, distributors, and business partners. It should not be
              used as a substitute for professional medical advice, diagnosis, or
              treatment. Patients should always consult their physician regarding any
              health conditions or treatment plans.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 Suviro Pharmalife Pvt. Ltd
          </div>
          <div className="footer-values">
            Quality · Ethics · Empathy · Sensibility
          </div>
        </div>

      </div>
    </footer>
  )
}