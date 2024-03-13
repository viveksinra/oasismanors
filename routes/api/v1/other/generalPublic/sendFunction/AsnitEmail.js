const nodemailer = require("nodemailer");

const MailForAsnit = async() => {

  let transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: {
      user: "info@oasismanors.com",
      pass: "OasMan#2024",
    },
  });

  let info = await transporter.sendMail({
    from: '"Vivek" <info@oasismanors.com>',
    to: "vivek.kr212@gmail.com",
    subject: "Image test",
    html: `
    <h1>Hello world</h1>
    <p>Here's an image for you</p>
    `, // Embedded image links to content ID

  });

  info.then((info) => {
    return({
      message:"Email sent successfully! Message ID:", 
    mailId:info.messageId,
    variant:"success"
  });
  })
  .catch((error) => {
    return({
      message:"Error sending email:", 
    mailId:info.messageId,
    variant:"error"
  });
  });
}



module.exports = MailForAsnit;