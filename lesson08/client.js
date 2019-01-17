var net = require('net');

var client = net.connect({port:8888}, ()=>{
    console.log("...... connected Server");
});

client.on('data',(data)=>{
    console.log(data.toString());
    client.end();
});

client.on('end',()=>{
    console.log(".... closed connect");
})
