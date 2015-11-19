var fs = require('fs');
var bunyan = require('bunyan');
var bunyanLumberjackStream = require('bunyan-lumberjack');

var outStream = bunyanLumberjackStream({
    tlsOptions: {
        host: 'elk.marathon.mesos',
        port: 5000,
        ca: [fs.readFileSync('src/logstash-forwarder.crt', {encoding: 'utf-8'})]
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
    streams: [{level: 'info', type: 'raw', stream: outStream}]
});

log.info("This should work!");