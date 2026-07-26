'use client'

import { useState } from 'react'
import TermsModal from './TermsModal'
import './application-form.css'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_SIZE = 5 * 1024 * 1024
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

function emptyForm() {
  return {
    firstName: '', lastName: '', email: '', phone: '', address: '',
    gender: '', experienceYears: '', currentCtc: '', expectedCtc: '',
    noticePeriod: '', comments: '', agreedTerms: false,
  }
}

export default function ApplicationForm({ jobId }) {
  const [form, setForm] = useState(emptyForm())
  const [resume, setResume] = useState(null)
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'
  const [error, setError] = useState('')
  const [termsOpen, setTermsOpen] = useState(false)

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function handleFile(e) {
    const file = e.target.files?.[0]
    if (!file) { setResume(null); return }
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError('Resume must be a PDF or DOCX file.')
      e.target.value = ''
      setResume(null)
      return
    }
    if (file.size > MAX_SIZE) {
      setError('Resume must be under 5MB.')
      e.target.value = ''
      setResume(null)
      return
    }
    setError('')
    setResume(file)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    const required = [
      'firstName', 'lastName', 'email', 'phone', 'address',
      'gender', 'experienceYears', 'currentCtc', 'expectedCtc', 'noticePeriod',
    ]
    if (required.some((f) => !form[f].trim())) {
      setError('Please fill in all required fields.')
      return
    }
    if (!EMAIL_RE.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (!resume) {
      setError('Please attach your resume (PDF or DOCX, max 5MB).')
      return
    }
    if (!form.agreedTerms) {
      setError('Please agree to the terms and conditions.')
      return
    }

    setStatus('sending')
    try {
      const body = new FormData()
      body.append('jobId', jobId)
      Object.entries(form).forEach(([k, v]) => body.append(k, v))
      body.append('resume', resume)

      const res = await fetch('/api/apply', { method: 'POST', body })
      if (!res.ok) {
        const data = await res.json()
        setError(data.error || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }
      setStatus('success')
      setForm(emptyForm())
      setResume(null)
    } catch (err) {
      setError('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="apply-success">
        <div className="apply-success-icon">✓</div>
        <h3>Application submitted</h3>
        <p>Thank you for applying — our team will review your application and get in touch if there&apos;s a match.</p>
        <button className="apply-submit" onClick={() => setStatus(null)}>Submit another application</button>
      </div>
    )
  }

  return (
    <>
      <form className="apply-form" onSubmit={handleSubmit}>
        <div className="apply-grid">
          <div className="apply-field">
            <label>First Name <span className="req">*</span></label>
            <input value={form.firstName} onChange={(e) => update('firstName', e.target.value)} />
          </div>
          <div className="apply-field">
            <label>Last Name <span className="req">*</span></label>
            <input value={form.lastName} onChange={(e) => update('lastName', e.target.value)} />
          </div>
          <div className="apply-field">
            <label>Email <span className="req">*</span></label>
            <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} />
          </div>
          <div className="apply-field">
            <label>Phone <span className="req">*</span></label>
            <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
          </div>
          <div className="apply-field apply-field--wide">
            <label>Address <span className="req">*</span></label>
            <input value={form.address} onChange={(e) => update('address', e.target.value)} />
          </div>
          <div className="apply-field">
            <label>Gender <span className="req">*</span></label>
            <select value={form.gender} onChange={(e) => update('gender', e.target.value)}>
              <option value="">Select…</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="apply-field">
            <label>Years of Relevant Experience <span className="req">*</span></label>
            <input value={form.experienceYears} onChange={(e) => update('experienceYears', e.target.value)} placeholder="e.g. 3 years" />
          </div>
          <div className="apply-field">
            <label>Current CTC <span className="req">*</span></label>
            <input value={form.currentCtc} onChange={(e) => update('currentCtc', e.target.value)} placeholder="e.g. 5 LPA" />
          </div>
          <div className="apply-field">
            <label>Expected CTC <span className="req">*</span></label>
            <input value={form.expectedCtc} onChange={(e) => update('expectedCtc', e.target.value)} placeholder="e.g. 7 LPA" />
          </div>
          <div className="apply-field">
            <label>Notice Period <span className="req">*</span></label>
            <input value={form.noticePeriod} onChange={(e) => update('noticePeriod', e.target.value)} placeholder="e.g. 30 days" />
          </div>
          <div className="apply-field apply-field--wide">
            <label>Attach Resume (PDF/DOCX, max 5MB) <span className="req">*</span></label>
            <input type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handleFile} />
            {resume && <div className="apply-file-name">{resume.name}</div>}
          </div>
          <div className="apply-field apply-field--wide">
            <label>Comments</label>
            <textarea value={form.comments} onChange={(e) => update('comments', e.target.value)} rows={4} />
          </div>
        </div>

        <label className="apply-terms">
          <input
            type="checkbox"
            checked={form.agreedTerms}
            onChange={(e) => update('agreedTerms', e.target.checked)}
          />
          <span>
            I agree to all{' '}
            <button type="button" className="apply-terms-link" onClick={() => setTermsOpen(true)}>
              terms and conditions
            </button>{' '}
            <span className="req">*</span>
          </span>
        </label>

        {error && <div className="apply-error">{error}</div>}

        <button type="submit" className="apply-submit" disabled={status === 'sending' || !form.agreedTerms}>
          {status === 'sending' ? 'Submitting…' : 'Submit Application'}
        </button>
      </form>

      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
    </>
  )
}
