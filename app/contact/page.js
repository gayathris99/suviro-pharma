'use client'

import { useState } from 'react'
import CategoryIcon from '@/components/ui/CategoryIcon'
import './contact.css'

const ENQUIRY_TYPES = ['Partnership', 'Product Enquiry', 'General']

const PARTNER_BLOCKS = [
  {
    icon: 'Stethoscope',
    label: 'For Healthcare Professionals',
    desc: 'Bioequivalent, rigorously tested therapeutic options you can prescribe with total confidence. Our medical representatives provide concise, evidence-based data without wasting your clinical time.',
  },
  {
    icon: 'MedicalSearch',
    label: 'For Distributors & PCD Franchise Partners',
    desc: 'Lucrative, ethically grounded growth opportunities — access to a robust supply chain, exclusive monopoly rights in designated territories, comprehensive promotional support, and uncompromised stock availability.',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', enquiryType: 'Partnership', message: '',
  })
  const [status, setStatus] = useState(null)
  const [error, setError] = useState('')

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!form.name || !form.phone || !form.email || !form.enquiryType || !form.message) {
      setError('Please fill in all fields.')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }
      setStatus('success')
      setForm({ name: '', phone: '', email: '', enquiryType: 'Partnership', message: '' })
    } catch (err) {
      setError('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  const formCard = (
    <div className="contact-form-wrap" id="contact-form">
      {status === 'success' ? (
        <div className="contact-success">
          <div className="contact-success-icon">✓</div>
          <h3>Message sent!</h3>
          <p>Thank you for reaching out. A member of our team will get back to you as soon as possible.</p>
          <button className="contact-again" onClick={() => setStatus(null)}>Send another message</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-card-head">
            <h3 className="form-card-title">Send us a message</h3>
            <p className="form-card-sub">We'll get back to you as soon as possible.</p>
          </div>

          {error && <div className="contact-error">{error}</div>}

          <div className="contact-field">
            <label>Name <span className="req">*</span></label>
            <input value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your full name" />
          </div>

          <div className="contact-row">
            <div className="contact-field">
              <label>Phone <span className="req">*</span></label>
              <input value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+91 …" />
            </div>
            <div className="contact-field">
              <label>Email <span className="req">*</span></label>
              <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" />
            </div>
          </div>

          <div className="contact-field">
            <label>Enquiry Type <span className="req">*</span></label>
            <select value={form.enquiryType} onChange={(e) => update('enquiryType', e.target.value)}>
              {ENQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          <div className="contact-field">
            <label>Message <span className="req">*</span></label>
            <textarea value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="How can we help?" rows={4} />
          </div>

          <button type="submit" className="contact-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  )

  return (
    <div className="contact-wrap-page">

      {/* ── Hero: Partner value + form side by side ── */}
      <section className="section contact-hero">
        <div className="container">
          <div className="contact-hero-head">
            <span className="eyebrow">Partner With Us</span>
            <h1 className="section-title">Grow with a partner you can trust.</h1>
            <p className="contact-hero-sub">
              We welcome inquiries from doctors, hospitals, distributors, and potential
              business partners. Let's talk about how we can work together.
            </p>
          </div>

          <div className="contact-hero-grid">
            {/* Left — partner blocks */}
            <div className="partner-blocks">
              {PARTNER_BLOCKS.map((b) => (
                <div key={b.label} className="partner-card">
                  <div className="partner-icon">
                    <CategoryIcon name={b.icon} size={24} color="#6366f1" />
                  </div>
                  <div>
                    <h3 className="partner-label">{b.label}</h3>
                    <p className="partner-desc">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — form (shows first on mobile via CSS order) */}
            {formCard}
          </div>
        </div>
      </section>

      {/* ── Contact details + map ── */}
      <section className="section contact-details">
        <div className="container">
          <div className="details-grid">
            <div className="contact-block">
              <span className="contact-label">Corporate Office</span>
              <p className="contact-value">
                Suviro Pharmalife Pvt. Ltd.<br />
                D.No. 2-23-120/1, Plot No. 195,<br />
                Near Sivalayam Temple, Satavahana Colony,<br />
                Kukatpally, Medchal–Malkajgiri,<br />
                Hyderabad – 500072, Telangana, India.
              </p>
            </div>
            <div className="contact-block">
              <span className="contact-label">Phone</span>
              <a href="tel:+918142571702" className="contact-value contact-link">+91 81425 71702</a>
              <span className="contact-label" style={{ marginTop: 20 }}>Email</span>
              <a href="mailto:suviropharmalife@gmail.com" className="contact-value contact-link">suviropharmalife@gmail.com</a>
              <span className="contact-label" style={{ marginTop: 20 }}>Business Hours</span>
              <p className="contact-value">Monday – Saturday<br />9:00 AM – 6:00 PM</p>
            </div>
            <div className="contact-block contact-map-block">
              <span className="contact-label">Find Us</span>
              <div className="contact-map">
                <iframe
                  title="Suviro Pharmalife location"
                  src="https://www.google.com/maps?q=Satavahana+Colony,+Kukatpally,+Hyderabad,+Telangana+500072&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '12px' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}