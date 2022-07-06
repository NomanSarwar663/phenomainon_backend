const mailgun = require("mailgun-js");
const mg = mailgun({
    apiKey: "bef1609fb6b429c87cf7b5275d4e0058-1b8ced53-8310e18e", 
    domain: "sandbox764d90c25d6d470795220a037881f4b5.mailgun.org"
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