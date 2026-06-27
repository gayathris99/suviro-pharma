import Link from 'next/link'
import './Promise.css'

export default function Promise() {
  return (
    <div className="promise-wrap">
      <div className="promise-card">

        <div className="promise-content">
          <span className="promise-tag">Our Promise</span>
          <h2 className="promise-title">
            Medicines are not products.<br />
            They are <span className="promise-accent">responsibilities.</span>
          </h2>
          <p className="promise-body">
            We curate every formulation we represent — from manufacturer
            audit to physician handover — so the standard of care reaches
            everyone we serve.
          </p>
        </div>

        <div className="promise-buttons">
          <Link href="/about" className="promise-btn promise-btn--light">
            Read our story
          </Link>
          <Link href="/contact" className="promise-btn promise-btn--outline">
            Become a partner
          </Link>
        </div>

      </div>
    </div>
  )
}
