'use client'

import { useState } from 'react'
import Link from 'next/link'
import './Faq.css'

const FAQS = [
  {
    q: 'Does Suviro manufacture its own products?',
    a: 'No. We partner with WHO-GMP audited manufacturers and take responsibility for curation, quality oversight and clinician-facing science.',
  },
  {
    q: 'How are your therapeutic divisions chosen?',
    a: 'Neuro, Nephro, Cardio and Gastro represent areas of significant chronic-care burden in India where consistent supply and scientific clarity meaningfully improve outcomes.',
  },
  {
    q: 'Are products available through retail pharmacies?',
    a: 'Yes, via our authorised distributor network. Reach out and we will guide you to the nearest stockist.',
  },
  {
    q: 'How do clinicians request samples or literature?',
    a: 'Registered medical professionals can request product literature and samples through the contact page; a representative will follow up directly.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen((cur) => (cur === i ? null : i))

  return (
    <section className="section faq">
      <div className="container">
        <div className="faq-layout">

          {/* Left — heading */}
          <div className="faq-left">
            <span className="eyebrow">Common Questions</span>
            <h2 className="section-title">
              Straight answers,<br />no theatrics.
            </h2>
            <p className="section-body">
              For anything else, our team is one message away.
            </p>
            <Link href="/contact" className="faq-talk">Talk to us →</Link>
          </div>

          {/* Right — accordion */}
          <div className="faq-list">
            {FAQS.map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                >
                  {item.q}
                  <span className={`faq-plus ${open === i ? 'faq-plus--open' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`faq-answer ${open === i ? 'faq-answer--open' : ''}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
