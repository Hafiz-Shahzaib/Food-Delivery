import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()
// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const sendOtpMail = async (to,otp) => {
    await transporter.sendMail({
    from: process.env.EMAIL, // sender address
    to, // list of recipients
    subject: "Reset Your Password", // subject line
    html: `<p>Your OTP for password reset is <b>${otp}</b>. It expires in 5 minutes.</p>`, // HTML body
  });
}