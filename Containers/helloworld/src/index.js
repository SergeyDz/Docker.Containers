var express = require('express');

// Constants
var PORT = 8090;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world from docker container 90\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
