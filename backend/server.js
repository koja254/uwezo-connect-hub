import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.ZOHO_PASSWORD) {
  console.error('Error: ZOHO_PASSWORD is not set in environment variables');
  process.exit(1);
}

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['https://689c784b05b196187d9f1168--gorgeous-seahorse-93fdcc.netlify.app', 'http://localhost:5173', 'http://localhost:8080'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// Zoho SMTP setup
const transporter = nodemailer.createTransport({
  host: 'smtppro.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: 'info@uwezolinkinitiative.org',
    pass: process.env.ZOHO_PASSWORD,
  },
});

// Debug route
app.get('/webhook', (req, res) => {
  res.status(200).send('Webhook endpoint is live. Use POST to submit form data.');
});

// Webhook route for form submissions
app.post('/webhook', async (req, res) => {
  const { 'form-name': formName, ...fields } = req.body;
  console.log('Received form submission:', { formName, fields });

  try {
    await transporter.sendMail({
      from: '"Uwezo Link" <info@uwezolinkinitiative.org>',
      to: 'tevinxrider@gmail.com',
      subject: `New ${formName} submission`,
      text: JSON.stringify(fields, null, 2),
    });
    console.log(`Email sent for form: ${formName}`);
    res.status(200).send('Form submitted successfully');
  } catch (error) {
    console.error('Error sending email for form', formName, error);
    res.status(500).send(`Error processing form: ${error.message}`);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));