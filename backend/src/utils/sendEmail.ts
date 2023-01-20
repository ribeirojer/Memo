const nodemailer = require("nodemailer");

export const sendEmail = async (emailData) => {
  //create transport
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  });

  //send email
  const info = await transporter.sendMail(emailData);
  console.log(`Message sent: ${info.messageId}`);
}
