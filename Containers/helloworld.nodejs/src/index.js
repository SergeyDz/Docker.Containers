var express = require('express');

// Constants
var PORT = 8085;

// App
var app = express();
app.get('/', function (req, res) {
  console.log('Request detected: ' + JSon.strignify(req));
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);