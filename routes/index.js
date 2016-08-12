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


var app = require('express')();
var http = require('http').Server(app);

app.get('/chat', function(req, res){
  res.send('<h1>Hello world</h1>');
});

app.get('/chat', function(req, res){
  res.sendFile(__dirname + '/chat.hbs');
});

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
});

// http.listen(3000, function(){
//   console.log('listening on *:3000');
// });

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});