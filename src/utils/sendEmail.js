const sgMail = require("@sendgrid/mail");

const sendEmail = ({ email, subject, text }) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "nguyen.vi.1292@gmail.com",
    from: "vienne@labs196.com",
    subject: "hello",
    text,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { sendEmail };
