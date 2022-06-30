// const nodemailer = require("nodemailer")

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

getTransporter = () => {
  return nodemailer.createTransport({
    // host: process.env.MAIL_HOST,
    // port: process.env.MAIL_PORT,
    // secure: false, // true for 465, false for other ports
    service: "gmail",
    auth: {
      user: process.env.MAIL_USERNAME, // generated ethereal user
      pass: process.env.MAIL_PASSWORD, // generated ethereal password
    },
  });
};

const wellComeEmail = async (args) => {
  // let transporter = getTransporter();
  // try {
  //     await transporter.sendMail({
  //         from: process.env.MAIL_FROM_NAME + " <" + process.env.MAIL_FROM + ">", // sender address
  //         to: args.email,
  //         subject: `${args.firstName} ${args.lastName}, Welcome`,
  //         text: `<h1>Welcome</h1><a href=${args.verifyEmailLink}>Verify your email</a>Your verification code is ${args.emailVerifyToken}`,
  //     });
  // } catch (error) {
  //     console.log("error", error);
  // }

  const msg = {
    to: args.email, // Change to your recipient
    from: "Phenomina", // Change to your verified sender
    subject: "Welcome to Phenomina! Confirm Your Email",
    text: "You're on your way! Let's confirm your email address.",
    // html: `<h1>Welcome</h1><a href=${args.verifyEmailLink}>Verify your email</a>Your verification code is ${args.emailVerifyToken}`,
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

module.exports = { wellComeEmail };
