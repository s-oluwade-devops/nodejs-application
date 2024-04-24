var express = require('express');
var app = express();

app.set('port', process.env.PORT || 9981);
app.use(express.static(__dirname + '/images'));

// View engine setup
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on http://localhost:' + app.get('port'));
  console.log('Replace localhost with public ip');
});
