var express = require('express');
var router = express.Router();
const messages = require('../messages');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Odin Mini Message Board', msg: messages });
});

router.get('/new', function (req, res, next) {
	res.render('form');
});

router.post('/new', function (req, res, next) {
	const text = req.body.text;
	const user = req.body.user;

	messages.push({ text: text, user: user, added: new Date() });
	res.redirect('/');
});

module.exports = router;
