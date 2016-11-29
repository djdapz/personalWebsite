var http = require('http');
var express = require('express');
var dotenv = require('dotenv');

dotenv.config();

var app = express();
var port = process.env.PORT;
app.use(express.static(__dirname + "/public"));

//routes
var mailRoutes = require('./app/routes/mail.js');


//routeconfig
app.route('/contact')
	.post(mailRoutes.sendMail);

app.listen(port, function(){
	console.log("listening on port: " + port);
});
