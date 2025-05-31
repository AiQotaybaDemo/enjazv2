"use server"

import nodemailer from "nodemailer"

interface EmailData {
  name: string
  email: string
  phone: string
  message: string
}

export async function sendEmail(data: EmailData) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_SERVER_USER,
      // to: "ktsyr1@gmail.com",
      to: "Comedown2024@gmail.com",
      subject: `غير مكتبة - استشارة جديدة من ${data.name}`,
      text: `
        الاسم: ${data.name}
        البريد الإلكتروني: ${data.email}
        رقم الهاتف: ${data.phone}
        الرسالة: ${data.message}
      `,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif;">
          <h2 style="color: #1289A6;">استشارة جديدة</h2>
          <p><strong>الاسم:</strong> ${data.name}</p>
          <p><strong>البريد الإلكتروني:</strong> ${data.email}</p>
          <p><strong>رقم الهاتف:</strong> ${data.phone}</p>
          <p><strong>الرسالة:</strong></p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}

