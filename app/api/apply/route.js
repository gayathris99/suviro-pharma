import nodemailer from 'nodemailer'
import { sql } from '@/lib/db'
import { uploadCv } from '@/lib/cloudinaryServer'

const MAX_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request) {
  try {
    const formData = await request.formData()

    const jobId = formData.get('jobId')
    const firstName = formData.get('firstName')?.toString().trim()
    const lastName = formData.get('lastName')?.toString().trim()
    const address = formData.get('address')?.toString().trim()
    const phone = formData.get('phone')?.toString().trim()
    const gender = formData.get('gender')?.toString().trim()
    const email = formData.get('email')?.toString().trim()
    const experienceYears = formData.get('experienceYears')?.toString().trim()
    const currentCtc = formData.get('currentCtc')?.toString().trim()
    const expectedCtc = formData.get('expectedCtc')?.toString().trim()
    const noticePeriod = formData.get('noticePeriod')?.toString().trim()
    const comments = formData.get('comments')?.toString().trim() || null
    const agreedTerms = formData.get('agreedTerms') === 'true'
    const resume = formData.get('resume')

    // ── Required-field validation (comments is the only optional field) ──
    if (
      !jobId || !firstName || !lastName || !address || !phone || !gender ||
      !email || !experienceYears || !currentCtc || !expectedCtc || !noticePeriod
    ) {
      return Response.json({ error: 'Please fill in all required fields.' }, { status: 400 })
    }
    if (!EMAIL_RE.test(email)) {
      return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }
    if (!agreedTerms) {
      return Response.json({ error: 'You must agree to the terms and conditions.' }, { status: 400 })
    }
    if (!resume || typeof resume === 'string') {
      return Response.json({ error: 'Please attach your resume.' }, { status: 400 })
    }
    if (!ALLOWED_TYPES.includes(resume.type)) {
      return Response.json({ error: 'Resume must be a PDF or DOCX file.' }, { status: 400 })
    }
    if (resume.size > MAX_SIZE) {
      return Response.json({ error: 'Resume must be under 5MB.' }, { status: 400 })
    }

    // ── Re-check the job is still open (protects against stale pages / direct calls) ──
    const [job] = await sql`
      SELECT id, role_name FROM jobs WHERE id = ${jobId} AND show_on_website = true
    `
    if (!job) {
      return Response.json({ error: 'This position is no longer accepting applications.' }, { status: 400 })
    }

    // ── Upload resume to Cloudinary (raw, signed) ──
    const buffer = Buffer.from(await resume.arrayBuffer())
    const uploaded = await uploadCv(buffer)

    // ── Save application ──
    await sql`
      INSERT INTO applications (
        job_id, first_name, last_name, address, phone, gender, email,
        experience_years, current_ctc, expected_ctc, notice_period, comments,
        cv_url, cv_public_id, agreed_terms
      ) VALUES (
        ${jobId}, ${firstName}, ${lastName}, ${address}, ${phone}, ${gender}, ${email},
        ${experienceYears}, ${currentCtc}, ${expectedCtc}, ${noticePeriod}, ${comments},
        ${uploaded.secure_url}, ${uploaded.public_id}, ${agreedTerms}
      )
    `

    // ── Email HR ──
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    })

    await transporter.sendMail({
      from: `"Suviro Pharma Careers" <${process.env.GMAIL_USER}>`,
      to: process.env.CAREERS_RECEIVER_EMAIL,
      subject: `New Application — ${job.role_name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2E3192;">New Application for ${job.role_name}</h2>
          <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 10px; background: #f5f5f5; font-weight: 600; width: 160px;">Name</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 10px; background: #f5f5f5; font-weight: 600;">Email</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 10px; background: #f5f5f5; font-weight: 600;">Phone</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding: 10px; background: #f5f5f5; font-weight: 600;">Address</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${address}</td></tr>
            <tr><td style="padding: 10px; background: #f5f5f5; font-weight: 600;">Gender</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${gender}</td></tr>
            <tr><td style="padding: 10px; background: #f5f5f5; font-weight: 600;">Experience</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${experienceYears}</td></tr>
            <tr><td style="padding: 10px; background: #f5f5f5; font-weight: 600;">Current CTC</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${currentCtc}</td></tr>
            <tr><td style="padding: 10px; background: #f5f5f5; font-weight: 600;">Expected CTC</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${expectedCtc}</td></tr>
            <tr><td style="padding: 10px; background: #f5f5f5; font-weight: 600;">Notice Period</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${noticePeriod}</td></tr>
            ${comments ? `<tr><td style="padding: 10px; background: #f5f5f5; font-weight: 600;">Comments</td><td style="padding: 10px; border-bottom: 1px solid #eee;">${comments}</td></tr>` : ''}
            <tr><td style="padding: 10px; background: #f5f5f5; font-weight: 600;">Resume</td><td style="padding: 10px;"><a href="${uploaded.secure_url}">View / Download CV</a></td></tr>
          </table>
          <p style="color: #888; font-size: 12px; margin-top: 24px;">
            Sent from suviropharma.com careers page
          </p>
        </div>
      `,
      attachments: [
        { filename: resume.name || 'resume', path: uploaded.secure_url },
      ],
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Apply form error:', error)
    return Response.json({ error: 'Failed to submit application. Please try again.' }, { status: 500 })
  }
}
