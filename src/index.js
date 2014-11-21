var http = require('http'),
    Etcd = new require('node-etcd'),
    etcd = new Etcd('127.0.0.1', '4001');

http.createServer(function(req, res) {
    var random = Math.floor((Math.random() * 1000) + 1);
    etcd.set('test-signal', random);
    res.writeHead(200, {'Content-Type': 'text/plain' });
    res.end('Setting signal to random number: ' + random);
}).listen(process.env.PORT || 8000);
