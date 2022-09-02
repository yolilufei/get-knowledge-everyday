import http from 'http';

const server = http.createServer((req, res) => {
    res.end('hllo');
})

server.listen(3000, () => console.log('server startup'));
