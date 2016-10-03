var express = require('express');
var router = express.Router();
var _ = require('underscore');
var db = require('../db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("get request");
  res.render('index', { title: 'Express' });
});

router.post('/join', function(req, res, next) {
	var body = _.pick(req.body, 'fullname', 'email');
	console.log("post request");
	db.user.create(body).then(function(user) {
		console.log("Successfully created user.");
/*		res.render('index', function(err, html) {
			res.send('<script>alert(\'Successfully joined!\')</script>');
		});*/
		res.render('index', {status: 'success'});
	}, function(e) {
		res.status(400);
	});
})

module.exports = router;
