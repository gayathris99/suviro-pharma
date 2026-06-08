'use client'

import { useState } from 'react'
import './Contact.css'

const enquiryTypes = [
  'Distribution Partnership',
  'Bulk / Institutional Purchase',
  'Product Information',
  'Careers',
  'General Enquiry',
]

const contactDetails = [
  { icon: '📍', text: 'Plot 42, Pharma SEZ, Hyderabad – 500084' },
  { icon: '📞', text: '+91 98765 43210' },
  { icon: '✉️', text: 'info@suviropharma.com' },
]

export default function Contact() {
  const [form, setForm] = useState({
    name:        '',
    phone:       '',
    email:       '',
    enquiryType: '',
    message:     '',
  })
  const [status, setStatus]   = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', enquiryType: '', message: '' })
      } else {
        const data = await res.json()
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Unable to send message. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">

      {/* ── Left ── */}
      <div className="contact-left">
        <div className="section-tag">Get In Touch</div>
        <h2 className="section-title">
          Partner with<br /><em>Suviro.</em>
        </h2>
        <p className="contact-body">
          Whether you&apos;re a distributor, hospital, or pharmacy chain —
          we&apos;d love to discuss how Suviro can serve your patients
          across India.
        </p>

        <div className="contact-details">
          {contactDetails.map((d) => (
            <div key={d.text} className="contact-detail">
              <div className="contact-detail-icon">{d.icon}</div>
              {d.text}
            </div>
          ))}
        </div>
      </div>

      {/* ── Right: form ── */}
      <div className="contact-form">
        {status === 'success' ? (
          <div className="form-success">
            <div className="form-success-icon">✅</div>
            <h3>Enquiry sent!</h3>
            <p style={{ color: 'var(--muted)', marginTop: '8px', fontSize: '14px' }}>
              Thank you for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <h3 className="contact-form-title">Send an Enquiry</h3>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

                {/* Name + Phone */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Dr. Ananya Sharma"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="ananya@hospital.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Enquiry type */}
                <div className="form-group">
                  <label htmlFor="enquiryType">Enquiry Type *</label>
                  <select
                    id="enquiryType" name="enquiryType"
                    value={form.enquiryType}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a category</option>
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Tell us about your requirements..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <p className="form-error">{errorMsg}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="form-submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Submit Enquiry'}
                </button>

              </div>
            </form>
          </>
        )}
      </div>

    </section>
  )
}