console.log('app is starting...');

var http = require('http');
var port = process.env.port || 8080;

http.createServer(function (req, res) {
    console.log('Demo HttpServer.');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log(Date.now());
    res.end('Hello beautiful!\n');
    
}).listen(port);