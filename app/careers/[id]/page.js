export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getOpenJobById, getAboutCompany } from '@/lib/queries'
import { JOB_DISCLAIMER } from '@/lib/careers'
import ApplicationForm from '@/components/careers/ApplicationForm'
import './job-detail.css'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const job = await getOpenJobById(id)
  return {
    title: job ? `${job.role_name} — Careers — Suviro Pharmalife` : 'Position not found — Suviro Pharmalife',
  }
}

export default async function JobDetailPage({ params }) {
  const { id } = await params
  const [job, aboutCompany] = await Promise.all([getOpenJobById(id), getAboutCompany()])

  if (!job) {
    return (
      <section className="section job-detail">
        <div className="container job-notfound">
          <span className="eyebrow">Careers</span>
          <h1 className="section-title">Position no longer available</h1>
          <p className="section-body">
            This job posting has been closed or is no longer accepting applications.
          </p>
          <Link href="/careers" className="job-back-link">← All positions</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section job-detail">
      <div className="container">
        <Link href="/careers" className="job-back-link">← All positions</Link>

        <div className="job-header">
          <div>
            <span className="eyebrow">Careers</span>
            <h1 className="job-title">{job.role_name}</h1>
            <div className="job-meta">
              {job.location && <span>{job.location}</span>}
              <span>Posted {formatDate(job.created_at)}</span>
            </div>
          </div>
          <a href="#apply-form" className="job-apply-now">Apply Now</a>
        </div>

        <div className="job-description">
          {job.description.split('\n').map((para, i) => (
            para.trim() ? <p key={i}>{para}</p> : <br key={i} />
          ))}
        </div>

        {aboutCompany && (
          <div className="job-about">
            <h2>About Company</h2>
            <p>{aboutCompany}</p>
          </div>
        )}

        <div className="job-disclaimer">
          <p>{JOB_DISCLAIMER}</p>
        </div>

        <div id="apply-form" className="job-apply-section">
          <h2 className="job-apply-title">Apply for this position</h2>
          <ApplicationForm jobId={job.id} />
        </div>
      </div>
    </section>
  )
}
