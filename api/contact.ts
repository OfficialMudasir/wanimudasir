import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

interface ContactPayload {
  name?: string
  email?: string
  subject?: string
  message?: string
  website?: string
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Allow', 'POST')

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject, message, website } = (req.body ?? {}) as ContactPayload

  if (website?.trim()) {
    return res.status(200).json({ success: true })
  }

  const trimmedName = name?.trim() ?? ''
  const trimmedEmail = email?.trim() ?? ''
  const trimmedSubject = subject?.trim() ?? ''
  const trimmedMessage = message?.trim() ?? ''

  if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  if (!isValidEmail(trimmedEmail)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  if (trimmedMessage.length > 5000) {
    return res.status(400).json({ error: 'Message is too long (max 5000 characters).' })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_TO, SMTP_FROM, SMTP_SECURE } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('SMTP environment variables are not configured')
    return res.status(503).json({
      error: 'Email service is not configured yet. Please email me directly or try again later.',
    })
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: SMTP_SECURE === 'true',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })

  const recipient = SMTP_TO || SMTP_USER
  const fromAddress = SMTP_FROM || SMTP_USER
  const safeName = escapeHtml(trimmedName)
  const safeEmail = escapeHtml(trimmedEmail)
  const safeSubject = escapeHtml(trimmedSubject)
  const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, '<br />')

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${fromAddress}>`,
      to: recipient,
      replyTo: `"${trimmedName}" <${trimmedEmail}>`,
      subject: `[Portfolio] ${trimmedSubject}`,
      text: [
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        '',
        trimmedMessage,
      ].join('\n'),
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <hr />
        <p>${safeMessage}</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('SMTP send failed:', error)
    return res.status(500).json({
      error: 'Unable to send your message right now. Please try again or email me directly.',
    })
  }
}
