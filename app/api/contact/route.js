import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, phone, email, enquiryType, message } = await request.json()

    // Basic validation
    if (!name || !phone || !email || !enquiryType || !message) {
      return Response.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    // ── Nodemailer transporter ──
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // ── Email to client ──
    await transporter.sendMail({
      from:    `"Suviro Pharma Website" <${process.env.GMAIL_USER}>`,
      to:      process.env.CONTACT_RECEIVER_EMAIL,
      subject: `New Enquiry — ${enquiryType}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2E3192;">New Enquiry from Suviro Pharma Website</h2>
          <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: 600; width: 160px;">Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: 600;">Phone</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: 600;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: 600;">Enquiry Type</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${enquiryType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: 600;">Message</td>
              <td style="padding: 10px;">${message}</td>
            </tr>
          </table>
          <p style="color: #888; font-size: 12px; margin-top: 24px;">
            Sent from suviropharma.com contact form
          </p>
        </div>
      `,
    })

    // ── Auto-reply to enquirer ──
    await transporter.sendMail({
      from:    `"Suviro Pharma" <${process.env.GMAIL_USER}>`,
      to:      email,
      subject: 'Thank you for your enquiry — Suviro Pharma',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2E3192;">Thank you, ${name}!</h2>
          <p>We have received your enquiry and will get back to you within 24 hours.</p>
          <p style="margin-top: 16px;"><strong>Your enquiry type:</strong> ${enquiryType}</p>
          <p style="margin-top: 24px; color: #888; font-size: 13px;">
            — Team Suviro Pharma<br/>
            suviropharmalife@gmail.com
          </p>
        </div>
      `,
    })

    return Response.json({ success: true })

  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}