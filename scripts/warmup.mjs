import nodemailer from 'nodemailer'

// Warmup config
const WARMUP_FROM = 'jordan@jdlo.site'
const WARMUP_TO = 'jordanl4solar@gmail.com'
const GMAIL_APP_PASSWORD = 'xvwr cenb wril kmnk'
const RESEND_API_KEY = 're_T4TMAMJ9_K7GtZW4RxNdchYzVcQoVPbpf'

// Day 1-7: 10/day, Day 8-14: 20/day, Day 15+: 30/day
const today = new Date()
const startDate = new Date('2026-04-12')
const daysSinceStart = Math.floor((today - startDate) / (1000 * 60 * 60 * 24))
const emailsToSend = daysSinceStart < 7 ? 10 : daysSinceStart < 14 ? 20 : 30

const warmupSubjects = [
  'Following up on this',
  'Checking in',
  'Quick question',
  'Thoughts on this?',
  'Re: our conversation',
  'One thing I wanted to mention',
  'Worth a look',
  'Saw this and thought of you',
  'Loop you in',
  'Just wanted to share this',
  'Any thoughts?',
  'Making progress on this',
  'Update from my end',
  'Quick note',
  'Circling back',
]

const warmupBodies = [
  'Hey, wanted to loop you in on some stuff I have been working on. Let me know what you think when you get a chance.',
  'Just checking in. Been heads down on a few projects. Hope things are good on your end.',
  'Saw something interesting today and thought it might be relevant to what we were talking about. Worth a look.',
  'Quick question — do you have a few minutes to connect this week? Have something I want to run by you.',
  'Making some solid progress on the project. Will send over an update once I have more to share.',
  'Hey, just wanted to reach out. Let me know if you need anything from my end.',
  'Been thinking about what you mentioned. I think there is something there — let us talk soon.',
  'Hope your week is going well. Let me know when you are free to connect.',
  'Just wrapped up something I think you will find useful. Sending it over shortly.',
  'Wanted to make sure this did not get lost. Let me know your thoughts.',
]

// Resend sender (jdlo.site → Gmail)

// Gmail replier (Gmail → jdlo.site, simulates reply)
const gmailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: WARMUP_TO,
    pass: GMAIL_APP_PASSWORD,
  },
})

const sleep = (ms) => new Promise(r => setTimeout(r, ms))
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)]
const randDelay = () => Math.floor(Math.random() * (180000 - 60000) + 60000) // 1-3 min between sends

console.log(`Day ${daysSinceStart + 1} of warmup — sending ${emailsToSend} emails\n`)

let sent = 0

for (let i = 0; i < emailsToSend; i++) {
  const subject = rand(warmupSubjects)
  const body = rand(warmupBodies)

  // Step 1: Send from jdlo.site via Resend
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `Jordan <${WARMUP_FROM}>`,
      to: [WARMUP_TO],
      subject,
      text: body,
      html: `<p>${body}</p>`,
    }),
  })

  const data = await res.json()

  if (res.ok) {
    console.log(`✓ Sent [${i + 1}/${emailsToSend}]: "${subject}"`)
    sent++

    // Step 2: Wait a bit, then reply from Gmail back to jdlo.site
    await sleep(15000) // 15 sec before reply

    try {
      await gmailTransporter.sendMail({
        from: WARMUP_TO,
        to: WARMUP_TO,
        subject: `Re: ${subject}`,
        text: 'Got it, thanks for sending this over. Will take a look and get back to you.',
      })
      console.log(`  ↩ Replied from Gmail`)
    } catch (e) {
      console.log(`  ↩ Reply failed: ${e.message}`)
    }

  } else {
    console.log(`✗ Failed [${i + 1}]: ${JSON.stringify(data)}`)
  }

  if (i < emailsToSend - 1) {
    const delay = randDelay()
    console.log(`  ⏳ Waiting ${Math.round(delay / 60000)} min...\n`)
    await sleep(delay)
  }
}

console.log(`\nWarmup done: ${sent} sent. Run this again tomorrow.`)
