// app/actions.ts
'use server'; // Mark this file as a Server Action

import nodemailer from 'nodemailer';

interface ContactFormInput {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail({ name, email, message }: ContactFormInput) {
  // 1. Validate Environment Variables
  // IMPORTANT: Ensure these environment variables are set securely in your .env.local file.
  // DO NOT hardcode your email or app password here.
  const userEmail = process.env.EMAIL_USER;
  const appPassword = process.env.EMAIL_APP_PASSWORD;
  const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER; // Email to send to, defaults to sender if not set

  if (!userEmail || !appPassword) {
    console.error('Missing EMAIL_USER or EMAIL_APP_PASSWORD environment variables.');
    return { success: false, message: 'Server configuration error: Email service not set up.' };
  }

  // 2. Create a Nodemailer Transporter
  // This configures how the email will be sent.
  // Using Gmail SMTP with an App Password is common.
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: userEmail,
      pass: appPassword,
    },
  });

  // 3. Define Email Content
  const mailOptions = {
    from: userEmail, // Your Gmail address
    to: recipientEmail, // The email address where you want to receive messages
    subject: `New Contact Form Message from ${name} (${email})`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #0056b3;">New Message from Your Website Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="background-color: #f4f4f4; padding: 15px; border-left: 5px solid #007bff; white-space: pre-wrap;">${message}</p>
        <p>This message was sent from your website's contact form.</p>
      </div>
    `,
  };

  // 4. Send the Email
  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    // You might want to log the full error for debugging but return a generic message to the user
    return { success: false, message: 'Failed to send message. Please try again later.' };
  }
}
