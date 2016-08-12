var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('finalproject.hbs');
});
router.get('/resources', function(req, res, next) {
  res.render('rpage.hbs');
});

module.exports = router;
