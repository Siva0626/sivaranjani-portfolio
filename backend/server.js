const express = require('express')
const cors = require('cors')
require('dotenv').config()

const { createClient } = require('@supabase/supabase-js')

const app = express()
const PORT = process.env.PORT || 5000
console.log('SERVER VERSION: 2026-08-27-HEALTH-FIX')
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

app.use(cors())
app.use(express.json())

// Root route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Sivaranjani Portfolio API is live',
  })
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Portfolio API is running',
  })
})

// Contact form API
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and message are required',
      })
    }

    const { data, error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
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

    return res.status(201).json({
      success: true,
      message: 'Contact message submitted successfully',
      data,
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