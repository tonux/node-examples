const http  = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello Tonux');

});

server.listen(8888, () =>{
    console.log('Server is running...');
});