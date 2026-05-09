import nodemailer from 'nodemailer'
import 'dotenv/config'

const hook = "I noticed your site has no tap-to-call phone number and no instant quote form, meaning anyone pulling it up on their phone in the backyard is likely bouncing to a competitor."
const pitchUrl = "https://pitches.jdlo.online/pitch/test-token"

const transporter = nodemailer.createTransport({
  host: 'smtp.ionos.com',
  port: 465,
  secure: true,
  auth: {
    user: 'jordan@jdlo.online',
    pass: process.env.IONOS_EMAIL_PASSWORD || 'h8TBf#t7EQn.sR/',
  },
});

async function run() {
  console.log("Sending test email to mrjxrdip@icloud.com via IONOS SMTP...");
  
  try {
    const info = await transporter.sendMail({
      from: '"Jordan" <jordan@jdlo.online>',
      to: 'mrjxrdip@icloud.com',
      subject: `Quick thought on your business`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 15px; color: #111827; line-height: 1.6; max-width: 600px;">
          <p>${hook}</p>
          <p>I put together a quick breakdown specific to your business — figured it was worth sending over:</p>
          <p><a href="${pitchUrl}" style="color: #2563eb; text-decoration: underline;">See the breakdown here</a></p>
          <p>Best,<br>Jordan</p>
        </div>
      `,
      text: `${hook}\n\nI put together a quick breakdown specific to your business — figured it was worth sending over:\n\n${pitchUrl}\n\nBest,\nJordan`,
    });

    console.log('✅ Test email sent successfully! Message ID:', info.messageId)
  } catch (err) {
    console.log('❌ Failed to send:', err.message)
  }
}

run();