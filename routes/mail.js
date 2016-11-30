var mailBehavior = require("../modules/mail.js");

var sendMail = function(req, res){
	mailBehavior.sendMail(req.query, function(error, result){
		if(error){
			res.status(500).send(error);
		}else{
			res.status(200).send("email successfully sent!");
		}
	})
};

module.exports = {
    sendMail: sendMail
}
