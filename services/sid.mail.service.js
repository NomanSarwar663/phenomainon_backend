const Sib = require("sib-api-v3-sdk");
require("dotenv").config();

const client = Sib.ApiClient.instance.authentications["api-key"];

client.apiKey = process.env.SIB_API_KEY;

const transEmailApi = new Sib.TransactionalEmailsApi();

const SendContactUsEmail = ({
  senderEmail,
  senderName,
  recieverEmail,
  recieverName,
}) => {
  const sender = {
    email: senderEmail,
    name: senderName,
  };

  const recievers = [
    {
      email: recieverEmail,
    },
  ];

  transEmailApi
    .sendTransacEmail({
      sender,
      to: recievers,
      subject: "Thanks for Contacting PhenomAinon - Ai",
      htmlContent: `<h1>Hi ${recieverName},</h1> <p>Thanks for Contacting PhenomAinon - Ai. We have recieved your message, we will contact you soon!</p>`,
    })
    .then(console.log)
    .catch(console.log);
};

module.exports = { SendContactUsEmail };
