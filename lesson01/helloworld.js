var http = require('http');

http.createServer((request, response)=>{
    response.writeHead(200,{
        'Content-Type':'text/plain'
    });

    response.end("Hello World! I'm NodeJS \n");
}).listen(8888);

console.log("Server running at https://127.0.0.1:8888/");