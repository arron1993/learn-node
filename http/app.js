const http = require('http');

const server = http.createServer((req, resp) => {
    if (req.url === '/') {
        resp.write("Hello world")
        resp.end();
    }

    if (req.url === '/test') {
        resp.write("test");
        resp.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');
