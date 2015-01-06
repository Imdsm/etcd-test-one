var http = require('http'),
    Etcd = require('node-etcd'),
    etcd = new Etcd('172.17.42.1', '4001');

http.createServer(function(req, res) {
    if (req.url === '/') {
        var random = Math.floor((Math.random() * 1000) + 1);
        etcd.set('test-signal', random);
        res.writeHead(200, {'Content-Type': 'text/plain' });
        res.end('Setting signal to random number: ' + random);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain' });
        res.end('Not found');
    }
}).listen(process.env.PORT || 8000);
