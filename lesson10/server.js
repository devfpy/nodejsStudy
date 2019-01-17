var express = require("express");
var fs = require("fs");

var app = express();

app.get("/listUsers", (req, res) => {
    fs.readFile(__dirname + "/user.json", "utf8", (error, data) => {
        res.end(data);
    });
});


//添加的新用户数据
var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}

app.get("/addUser",(req, res)=>{
    fs.readFile(__dirname+"/"+"user.json", "utf8", (error, data)=>{

        data = JSON.parse(data);
        data["user4"] = user["user4"];
        res.end(JSON.stringify(data));
    })
});


app.get("/:id", (req, res)=>{

    let userId = req.params.id;

    fs.readFile(__dirname+"/"+"user.json","utf8",(error, data)=>{

        console.log("..... user id = "+userId);
        data = JSON.parse(data);
        let user = data["user"+userId];

        res.end(JSON.stringify(user));
        
    })
})


var server = app.listen(8888, "127.0.0.1", () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server running at http://%s:%s", host, port);
})