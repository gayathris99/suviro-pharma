import './careers.css'

export const metadata = {
  title: 'Careers — Suviro Pharmalife',
  description: 'Career opportunities at Suviro Pharmalife Pvt. Ltd.',
}

export default function Careers() {
  return (
    <div className="careers-page">
      <div className="careers-container">
        <span className="eyebrow">Careers</span>
        <h1 className="careers-title">Join our team.</h1>
        <p className="careers-lead">
          We&apos;re not currently listing open roles, but we&apos;re always glad to hear
          from people who share our commitment to quality, ethics and empathy.
          Check back soon, or reach out directly and tell us how you&apos;d like to
          contribute.
        </p>
        <a href="mailto:suviropharmalife@gmail.com" className="careers-cta">
          Email us at suviropharmalife@gmail.com
        </a>
      </div>
    </div>
  )
}
