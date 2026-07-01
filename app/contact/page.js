'use client'

import { useState } from 'react'
import './contact.css'

const ENQUIRY_TYPES = ['Partnership', 'Product Enquiry', 'General']

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', enquiryType: 'Partnership', message: '',
  })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'
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

  return (
    <section className="section contact-page">
      <div className="container">

        <div className="contact-head">
          <span className="eyebrow">Get in Touch</span>
          <h1 className="section-title">Let's talk.</h1>
          <p className="contact-sub">
            Whether you're a healthcare professional, distribution partner, or exploring
            a collaboration — we'd be glad to hear from you.
          </p>
        </div>

        <div className="contact-grid">

          {/* Left — details */}
          <div className="contact-info">
            <div className="contact-block">
              <span className="contact-label">Address</span>
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
            </div>

            <div className="contact-block">
              <span className="contact-label">Email</span>
              <a href="mailto:suviropharmalife@gmail.com" className="contact-value contact-link">suviropharmalife@gmail.com</a>
            </div>

            {/* Map */}
            <div className="contact-map">
              <iframe
                title="Suviro Pharmalife location"
                src="https://www.google.com/maps?q=Satavahana+Colony,+Kukatpally,+Hyderabad,+Telangana+500072&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '12px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form-wrap">
            {status === 'success' ? (
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>
                <h3>Message sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button className="contact-again" onClick={() => setStatus(null)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
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
                  <textarea value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="How can we help?" rows={5} />
                </div>

                <button type="submit" className="contact-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}