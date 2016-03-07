var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('<b>Hello</b> Express.<br>Welcome Shahbaz in <span style="color:#436def">express</span> and <span style="color:green">node</span> world.<br><a href="/me">About</a>');
});

app.get('/me', function(req, res) {
  res.send('@shahbaz17');
});

app.get('/who/:name?', function(req, res) {
  var name = req.params.name;
  res.send('Hello from ' + name);
});

app.get('/who/:username?/:password?', function(req, res) {
  var username = req.params.username;
  var password = req.params.password;
  res.send(username + '<br>' + password);
});

app.get('*', function(req, res) {
  res.send('404');
});

var server = app.listen(3000, function() {
   console.log('Listening on port 3000. Go to http://localhost:3000');
});
