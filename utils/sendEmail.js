const nodemailer = require("nodemailer");

const sendEmail = async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rfaraz5678@gmail.com",
      pass: "eqqdbscfufrjyrnm"
    }
  });

  await transporter.sendMail({
    from: "Virtual Event Platform",
    to: "user@gmail.com",
    subject: "Event Registration",
    text: "You have successfully registered for the event!"
  });
};

module.exports = sendEmail;
