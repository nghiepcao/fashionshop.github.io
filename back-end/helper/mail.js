const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
);

module.exports.send = (email, subject, mess) => {
  const mailOptions = {
    from: "My Instagram <any@pvt.com>",
    to: email,
    subject,
    text: "For clients with plaintext support only",
    html: mess,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ' ${info.response}`);
    }
  });
};
