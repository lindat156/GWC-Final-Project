var express = require('express');
var router = express.Router();
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('finalproject.hbs');
});
router.get('/resources', function(req, res, next) {
  res.render('rpage.hbs');
});
router.get('/ourbeautifulmap', function(req, res, next) {
  res.render('AHH.hbs');
});
router.get('/chat', function(req, res, next) {
  res.render('chat.hbs');
});

