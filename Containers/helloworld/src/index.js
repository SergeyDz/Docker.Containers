var express = require('express');
var log = require('./Logger.js').log;

// Constants
var PORT = 8090;

// App
var app = express();
app.get('/hellodocker', function (req, res) {
  res.send('Hello world from docker container 90\n');
  log.debug('Hello world from docker container 90');
});

app.listen(PORT);
var info = 'Running on http://localhost:' + PORT +'/hellodocker';
log.info(info); 
console.log(info);

