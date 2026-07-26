export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { getOpenJobs, getAboutCompany } from '@/lib/queries'
import './careers.css'

export const metadata = {
  title: 'Careers — Suviro Pharmalife',
  description: 'Open positions at Suviro Pharmalife Pvt. Ltd.',
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default async function CareersPage() {
  const [jobs, aboutCompany] = await Promise.all([getOpenJobs(), getAboutCompany()])

  return (
    <section className="section careers-hero">
      <div className="container">
        <span className="eyebrow">Careers</span>
        <h1 className="section-title">Join our team.</h1>
        <p className="section-body careers-lead">
          We&apos;re always glad to hear from people who share our commitment to quality,
          ethics and empathy. Explore our current openings below.
        </p>

        {aboutCompany && (
          <div className="careers-about">
            <p>{aboutCompany}</p>
          </div>
        )}

        {jobs.length === 0 ? (
          <div className="careers-empty">
            <p>No open positions right now — check back soon.</p>
            <a href="mailto:suviropharmalife@gmail.com" className="careers-cta">
              Email us at suviropharmalife@gmail.com
            </a>
          </div>
        ) : (
          <div className="careers-table-wrap">
            <table className="careers-table">
              <thead>
                <tr>
                  <th>Job Role</th>
                  <th>Location</th>
                  <th>Posted</th>
                  <th className="careers-table-apply-col">Apply</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.role_name}</td>
                    <td>{job.location || '—'}</td>
                    <td>{formatDate(job.created_at)}</td>
                    <td className="careers-table-apply-col">
                      <Link href={`/careers/${job.id}`} className="careers-apply-btn">
                        View &amp; Apply
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}
