var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

var urlEncode = bodyParser.urlencoded({ extended: false })
// Application JSON parser
var jsonParser = bodyParser.json();

// parse various different custom JSON types as JSON 
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer 
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string 
app.use(bodyParser.text({ type: 'text/html' }))

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, function() {
	console.log('The app is listening on Port ' + PORT);
});