import './leadership.css'

export const metadata = {
  title: 'Leadership — Suviro Pharmalife',
  description: 'A message from Dr. Rohith Reddy, Founder & Chairman of Suviro Pharmalife — on trust, responsibility, and an unwavering commitment to quality healthcare.',
}

export default function Leadership() {
  return (
    <div className="leadership-page">
      <section className="section">
        <div className="container">
          <div className="lead-head">
            <span className="eyebrow">Leadership</span>
            <h1 className="section-title">A message from the Founder &amp; Chairman.</h1>
          </div>

          <div className="lead-grid">
            {/* Photo */}
            <div className="lead-photo-col">
              <div className="lead-photo">
                <img src="/founder.jpeg" alt="Dr. Rohith Reddy, Founder & Chairman of Suviro Pharmalife" />
              </div>
              <div className="lead-signature">
                <div className="lead-sign-name">Dr. Rohith Reddy</div>
                <div className="lead-sign-role">Founder &amp; Chairman</div>
                <div className="lead-sign-company">Suviro Pharmalife Pvt. Ltd.</div>
              </div>
            </div>

            {/* Message */}
            <div className="lead-message">
              <p>
                At Suviro Pharmalife, we believe that meaningful progress in healthcare
                begins with trust, responsibility, and an unwavering commitment to quality.
              </p>
              <p>
                Our purpose is to build a pharmaceutical organization distinguished not
                merely by the products we bring to market, but by the integrity with which
                we build every relationship. In collaboration with trusted and capable
                manufacturing partners, we strive to make quality healthcare solutions
                accessible while maintaining uncompromising standards of professionalism,
                consistency, and ethical conduct.
              </p>
              <p>
                We recognize that in healthcare, credibility is earned over time. Every
                interaction with a healthcare professional, distributor, customer, or
                business partner is an opportunity to demonstrate our commitment to
                reliability, transparency, and excellence. These principles guide our
                decisions and shape the way we conduct our business.
              </p>
              <p>
                Our journey is defined by the confidence entrusted to us by the healthcare
                community. Every milestone is not simply a measure of growth, but a
                reflection of the relationships we have built and the responsibility we
                carry towards those who place their trust in Suviro.
              </p>
              <p>
                As we look ahead, our ambition is clear — to build a respected
                pharmaceutical organization founded on quality, integrity, scientific
                thinking, and enduring partnerships.
              </p>
              <p>
                We will continue to move forward with humility, purpose, and conviction,
                creating value for our partners and contributing meaningfully to better
                healthcare.
              </p>
              <p className="lead-tagline">Progress through Science.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}