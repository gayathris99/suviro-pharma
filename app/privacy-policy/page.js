import './privacy-policy.css'

export const metadata = {
  title: 'Privacy Policy — Suviro Pharmalife Pvt. Ltd.',
  description: 'Privacy Policy for Suviro Pharmalife Pvt. Ltd.',
}

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-container">

        <div className="legal-header">
          <p className="legal-tag">Legal</p>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-meta">
            Last updated: January 2026 &nbsp;·&nbsp;
            Effective date: January 2026
          </p>
        </div>

        <div className="legal-body">

          <p>
            Suviro Pharmalife Pvt. Ltd. (&quot;Suviro Pharma&quot;, &quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, and safeguard your
            information when you visit our website or contact us through
            our enquiry form.
          </p>

          <h2>1. Information We Collect</h2>
          <p>When you submit an enquiry through our contact form, we collect:</p>
          <ul>
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Nature of enquiry</li>
            <li>Any information you provide in your message</li>
          </ul>
          <p>
            We also collect standard technical information automatically
            when you visit our website, such as your IP address, browser
            type, and pages visited. This is collected through standard
            web server logs and is used solely for website performance
            and security purposes.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information you provide to:</p>
          <ul>
            <li>Respond to your enquiry or business request</li>
            <li>Provide information about our products and services</li>
            <li>Process distribution or partnership enquiries</li>
            <li>Send you relevant updates if you have opted in</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>
          <p>
            We do not use your personal information for automated
            decision-making or profiling.
          </p>

          <h2>3. Data Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to
            third parties. We may share your information only in the
            following circumstances:
          </p>
          <ul>
            <li>
              <strong>Service providers:</strong> Trusted partners who
              assist in operating our website and conducting our
              business, subject to confidentiality obligations
            </li>
            <li>
              <strong>Legal compliance:</strong> When required by law,
              court order, or government authority
            </li>
            <li>
              <strong>Business transfer:</strong> In the event of a
              merger, acquisition, or sale of assets, your information
              may be transferred as part of that transaction
            </li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary
            to fulfil the purposes outlined in this policy, or as
            required by applicable law. Enquiry data is typically
            retained for a period of 3 years. You may request deletion
            of your data at any time by contacting us.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organisational
            measures to protect your personal information against
            unauthorised access, alteration, disclosure, or destruction.
            However, no method of transmission over the internet is
            100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>6. Your Rights</h2>
          <p>Under applicable data protection laws, you have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Withdraw consent at any time where processing is based on consent</li>
            <li>Lodge a complaint with the relevant data protection authority</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at
            the details provided below.
          </p>

          <h2>7. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing
            experience. Cookies are small files stored on your device
            that help us understand how visitors use our site. You can
            control cookie settings through your browser preferences.
            Disabling cookies may affect certain features of the website.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We
            are not responsible for the privacy practices or content of
            those sites. We encourage you to review the privacy policies
            of any third-party sites you visit.
          </p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our website is not directed at children under the age of 18.
            We do not knowingly collect personal information from
            children. If you believe we have inadvertently collected
            such information, please contact us immediately.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to
            reflect changes in our practices or legal requirements. We
            will notify you of any significant changes by posting the
            updated policy on this page with a revised effective date.
            We encourage you to review this policy periodically.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding
            this Privacy Policy, please contact us:
          </p>
          <div className="legal-contact-box">
            <p><strong>Suviro Pharmalife Pvt. Ltd.</strong></p>
            <p>Plot 42, Pharma SEZ, Hyderabad – 500084</p>
            <p>
              Email:{' '}
              <a href="mailto:suviropharmalife@gmail.com">
                suviropharmalife@gmail.com
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href="tel:+918142571702">+91 8142571702</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}