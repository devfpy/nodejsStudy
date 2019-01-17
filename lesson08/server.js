var net = require('net');

var server = net.createServer((connection)=>{
    console.log(".... client connected");
    connection.on("end",()=>{
        console.log("client closed connect");
    });

    connection.write("Welcome to NetServer!");
    connection.pipe(connection);
});

server.listen(8888,()=>{
    console.log("Net Server running at Port:8888");
})

