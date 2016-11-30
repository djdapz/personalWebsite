var http = require('http');
var express = require('express');
var dotenv = require('dotenv');

dotenv.config();

var app = express();
var port = process.env.PORT;
app.use(express.static(__dirname + "/public"));

//routes
var mailRoutes = require('./app/routes/mail.js');


app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST", "PUT");
    next();
});


//routeconfig
app.route('/contact')
	.post(mailRoutes.sendMail);

app.listen(port, function(){
	console.log("listening on port: " + port);
});
