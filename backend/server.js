const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { createClient } = require('@supabase/supabase-js')
const { Resend } = require('resend')

const app = express()
const PORT = Number(process.env.PORT) || 5000
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173'
const allowedOrigins = new Set(
  FRONTEND_URL.split(',').map((origin) => origin.trim()).filter(Boolean),
)

console.log('SERVER VERSION: 2026-08-30-MASTER-CODING-PASS')

const requiredEnv = [
  'SUPABASE_URL',
  'SUPABASE_SERVICE_ROLE_KEY',
  'RESEND_API_KEY',
  'PROFESSIONAL_EMAIL',
  'RESEND_FROM_EMAIL',
]

const missingEnv = requiredEnv.filter((key) => !process.env[key])

if (missingEnv.length > 0) {
  console.error(`Missing required environment variables: ${missingEnv.join(', ')}`)
  process.exit(1)
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
)

const resend = new Resend(process.env.RESEND_API_KEY)

// =========================================================
// MIDDLEWARE
// =========================================================

app.disable('x-powered-by')

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.has(origin)) {
        return callback(null, true)
      }
      return callback(new Error('Origin is not allowed by CORS'))
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  }),
)

app.use(
  express.json({
    limit: '50kb',
  }),
)

// Small in-memory rate limiter for the contact endpoint.
// For multi-instance production deployments, replace this with
// a shared store/rate-limiting service.
const contactAttempts = new Map()
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX = 5

function isRateLimited(ip) {
  const now = Date.now()
  const previous = contactAttempts.get(ip) || []
  const recent = previous.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  )

  recent.push(now)
  contactAttempts.set(ip, recent)

  return recent.length > RATE_LIMIT_MAX
}

// =========================================================
// HELPERS
// =========================================================

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function cleanText(value) {
  return String(value).trim()
}

// =========================================================
// ROOT
// =========================================================

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Sivaranjani Portfolio API is live',
  })
})

// =========================================================
// HEALTH CHECK
// =========================================================

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Portfolio API is running',
  })
})

// =========================================================
// CONTACT FORM API
// =========================================================

app.post('/api/contact', async (req, res) => {
  try {
    const clientIp = req.ip || req.socket.remoteAddress || 'unknown'

    if (isRateLimited(clientIp)) {
      return res.status(429).json({
        success: false,
        message: 'Too many contact attempts. Please try again later.',
      })
    }

    const { name, email, message, website } = req.body || {}

    // Honeypot field: automated submissions commonly populate it, while
    // normal users never see it in the frontend.
    if (website) {
      return res.status(201).json({ success: true, message: 'Contact message submitted successfully' })
    }

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and message are required',
      })
    }

    const cleanName = cleanText(name).replace(/[\r\n]+/g, ' ')
    const cleanEmail = cleanText(email).toLowerCase()
    const cleanMessage = cleanText(message)

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and message cannot be empty',
      })
    }

    if (!isValidEmail(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address',
      })
    }

    if (cleanName.length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Name is too long',
      })
    }

    if (cleanEmail.length > 254) {
      return res.status(400).json({
        success: false,
        message: 'Email address is too long',
      })
    }

    if (cleanMessage.length > 5000) {
      return res.status(400).json({
        success: false,
        message: 'Message is too long',
      })
    }

    // -----------------------------------------------------
    // SAVE TO SUPABASE
    // -----------------------------------------------------

    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: cleanName,
          email: cleanEmail,
          message: cleanMessage,
        },
      ])
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)

      return res.status(500).json({
        success: false,
        message: 'Failed to save contact message',
      })
    }

    // -----------------------------------------------------
    // SAFE EMAIL HTML
    // -----------------------------------------------------

    const safeName = escapeHtml(cleanName)
    const safeEmail = escapeHtml(cleanEmail)
    const safeMessage = escapeHtml(cleanMessage)

    // -----------------------------------------------------
    // SEND EMAIL
    // -----------------------------------------------------

    const { data: emailData, error: emailError } =
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: [process.env.PROFESSIONAL_EMAIL],
        replyTo: cleanEmail,
        subject: `New portfolio enquiry from ${cleanName}`,
        html: `
          <div style="font-family:Arial,sans-serif;line-height:1.6;max-width:650px;margin:0 auto;color:#17202a;">
            <h2 style="color:#0d6f72;">New Portfolio Contact</h2>
            <p>Someone has submitted a new enquiry through your professional portfolio.</p>
            <hr />
            <h3>Contact Details</h3>
            <p><strong>Name:</strong><br />${safeName}</p>
            <p><strong>Email:</strong><br /><a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <h3>Message</h3>
            <div style="padding:16px;background:#f5f3ed;border-left:4px solid #0d6f72;white-space:pre-wrap;">${safeMessage}</div>
            <hr />
            <p style="color:#666;">This notification was generated automatically by the Sivaranjani professional portfolio.</p>
          </div>
        `,
      })

    if (emailError) {
      console.error('Resend email error:', emailError)

      return res.status(201).json({
        success: true,
        message:
          'Message saved successfully, but email notification could not be sent.',
        data,
        emailSent: false,
      })
    }

    console.log('Email notification sent:', emailData?.id)

    return res.status(201).json({
      success: true,
      message: 'Contact message submitted successfully',
      data,
      emailSent: true,
    })
  } catch (error) {
    console.error('Server error:', error)

    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
})

app.listen(PORT, () => {
  console.log(`Portfolio API running on port ${PORT}`)
})
