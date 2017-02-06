var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

//public
app.use(express.static('public'));
//bower_components
app.use(express.static('bower_components'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(app.get('port'));