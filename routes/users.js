var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  res.render('users', { name: req.params.name });
});

router.post('/', function(req, res, next) {
  var msg = req.body.message;
  res.redirect('/users/' + msg);
});

module.exports = router;
