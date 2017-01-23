var express = require('express');
var router = express.Router();
var User = require('../models/user.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Asynchronized call
  User.findOne({}, function(err, doc) {
    if (err) {
      return res.send('Error');
    }
    res.send('Created user with email:' + doc.email);
  });
});

router.post('/', function(req, res, next) {
  var email = req.body.email;
  var user = new User({
    firstName: 'Huan',
    lastName: 'Chang',
    password: 'super0secret',
    email: email
  });
  // Create user in Mongo DB
  user.save();
  res.redirect('/users/')
});

module.exports = router;
