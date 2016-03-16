var express = require('express');

module.exports = function (app) {
	// serve static assets off of /static virtual path prefix
	app.use('/static', express.static(__dirname + '/../../dist'));

	// app.use('/api', )

	// // This is the server entry point for the application.
	// app.get("/*", entry);



	 app.get('/*', function (req, res) {
	   res.render('index', { title: 'The Main Page' });
	 });

	// require('./api.js')(app);

	// //HTML5 locationProvider support
	// app.get('/*', function(req, res) {
	// 	res.render('index', { title: 'The Main Page' });
	// });
};