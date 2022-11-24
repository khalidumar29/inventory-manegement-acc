// Google mail sender
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

module.exports.sendMailWithGmail = async (data) => {
  const accessToken = await oAuth2Client.getAccessToken();
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.SENDER_MAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });
  const mailData = {
    from: process.env.SENDER_MAIL,
    to: data.to,
    subject: data.subject,
    text: data.text,
  };
  let info = await transporter.sendMail(mailData);
  return info.messageId;
};

// MAIL GUN
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAIL_GUN_KEY,
});

module.exports.sendMailWithMailGun = async (data) => {
  const result = await mg.messages.create(
    "sandboxcf1452d7b71240a59899d2d8cc83cb70.mailgun.org",
    {
      from: "sandboxcf1452d7b71240a59899d2d8cc83cb70.mailgun.org",
      to: [data.email],
      subject: data.subject,
      text: data.text,
    }
  );
  return result.id;
};
