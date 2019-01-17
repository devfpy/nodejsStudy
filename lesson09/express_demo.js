var express = require('express');
var app = express();

app.get('/', (req, res)=>{
    res.send("Welcome to Express World! This is Get Request");
});

app.post('/',(req, res)=>{
    res.send("Welcome to Express World! This is Post Request");
});

var server = app.listen(8888, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server was started on http://%s:%s",host,port);
});