const mailgun = require("mailgun-js");
const mg = mailgun({
    apiKey: process.env.EMAIL_APIKEY, 
    domain: process.env.EMAIL_APIDOMAIN
});

async function mail(firstName, lastName, email, message,subject){
	const data = {
		from: 'Excited User me@samples.mailgun.org',
		to:email,
		subject: subject,
		text: message
	};
	return mg.messages().send(data, function (error, body) {
		if(body){
			console.log("Email has been sent")
		}
	});
}

module.exports = {
	mail	
}