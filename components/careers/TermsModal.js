'use client'

export default function TermsModal({ open, onClose }) {
  if (!open) return null

  return (
    <div className="terms-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="terms-modal">
        <div className="terms-modal-head">
          <h3>Terms &amp; Conditions — Job Application</h3>
          <button className="terms-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="terms-modal-body">
          <p>
            By submitting this application, you consent to Suviro Pharmalife Pvt. Ltd.
            (&quot;Suviro Pharmalife&quot;, &quot;we&quot;, &quot;us&quot;) collecting and processing the
            personal information you provide — including your name, contact details, address,
            gender, employment history, compensation details (current and expected CTC),
            notice period, and your uploaded resume — for the purpose of evaluating your
            candidacy for the position applied to and, where relevant, other current or
            future openings at Suviro Pharmalife.
          </p>
          <h4>How your information is used</h4>
          <ul>
            <li>Reviewing your application and assessing your fit for the role.</li>
            <li>Contacting you regarding your application and the recruitment process.</li>
            <li>Internal record-keeping for hiring decisions.</li>
          </ul>
          <h4>Storage &amp; retention</h4>
          <p>
            Your application data, including your resume, is stored securely and accessed
            only by authorised Suviro Pharmalife personnel involved in recruitment. You may
            request that your application and resume be deleted at any time by contacting us
            at the email address below.
          </p>
          <h4>Accuracy of information</h4>
          <p>
            You confirm that the information provided in this application is true, complete,
            and accurate to the best of your knowledge. Providing false or misleading
            information may result in disqualification from the recruitment process or,
            if discovered after hiring, termination of employment.
          </p>
          <h4>Contact</h4>
          <p>
            For any questions about how your data is handled, or to request its deletion,
            contact us at{' '}
            <a href="mailto:suviropharmalife@gmail.com">suviropharmalife@gmail.com</a>.
          </p>
        </div>
        <div className="terms-modal-foot">
          <button className="terms-modal-ok" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}
