var express = require('express');

// Constants
var PORT = 8090;

// App
var app = express();
app.get('/hellodocker', function (req, res) {
  res.send('Hello world from docker container 90\n');
});

app.listen(PORT);
var info = 'Running on http://localhost:' + PORT +'/hellodocker';

//log.debug({Message: 'App started'}); 
console.log(info);

