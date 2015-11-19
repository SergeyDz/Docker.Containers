var fs = require('fs');
var bunyan = require('bunyan');
var bunyanLumberjackStream = require('bunyan-lumberjack');

var config = JSON.parse(fs.readFileSync('src/config/logger.json', 'utf8')).logstash;

var outStream = bunyanLumberjackStream({
    tlsOptions: {
        host: config.host,
        port: config.port,
        ca: [fs.readFileSync(config.cert, {encoding: 'utf-8'})]
    }
});

outStream.on('connect', function() {
    console.log("Connected!");
});
outStream.on('dropped', function(count) {
    console.log("ERROR: Dropped " + count + " messages!");
});
outStream.on('disconnect', function(err) {
    console.log("WARN : Disconnected", err);
});

var log = bunyan.createLogger({
    name: "myLog",
    streams: [{level: 'debug', type: 'raw', stream: outStream}]
});

exports.log = log;
