var nodemailer = require('nodemailer');
var Handlebars = require('handlebars');
var validator = require('email-validator');
var fs = require('fs');

var mailOpts;
var smtpTrans;
var emailTemplate;

fs.readFile(__dirname + '/templates/email.hbs', {encoding: 'utf-8'}, function (err, html) {
    if (err) {
        throw err;
    } else {
        emailTemplate = Handlebars.compile(html);
    }
});

var sendMail = function (data, callback) {
    var res, err;

    if (data.company) {
        err = {
            type: "spam",
            msg: "Spambot detected, please contact me via telephone"
        };
    } else if (!data.name || !data.email || !data.message) {
        err = {
            type: 'incomplete',
            msg: 'Missing field, please ensure all fields are entered'
        };
    } else if (!validator.validate(data.email)) {
        err = {
            type: 'invalid email',
            msg: 'Please enter a valid email address and try again.'
        };
    }


    if (err) {
        callback(err, res);
    } else {
        smtpTrans = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        mailOpts = {
            from: process.env.EMAIL_ADDRESS,
            to: 'devon.dapuzzo@gmail.com',
            subject: "Website Contact - devon.dapuzzo.com",
            html: emailTemplate(data)
        };

        smtpTrans.sendMail(mailOpts, function (error, info) {
            if (error) {
                console.log(error);
                res = {
                    type: "error",
                    msg: error
                };
                callback(err, res);
            } else {
                callback(err, res);
            }

        });
    }
};

module.exports = {
    sendMail: sendMail
};
