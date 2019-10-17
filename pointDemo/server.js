var express = require("./node_modules/express");
var fs = require("fs");

var app = express();

app.get("/api/history",()=>{
    let pointId = req.query.pointId;
    console.log("........ pointId = ["+pointId+"]")

    fs.readFile(__dirname+"/pointdata/"+pointId+".json","utf8",(error, data)=>{
        if(!error){
            res.end(data);
        }
        else{
            let errRes = {
                Desc: "success",
                Msg: "success",
                Rows: [
                    {
                        xData: [],
                        yData: []
                    }
                ],
                Status: 102,
                Success: false,
                Total: 0
            }
            res.end(JSON.stringify(errRes));

        }
        
    })
});

app.get("/api/points", (req, res)=>{

    console.log(req.params);
    console.log(req.query);
    let pointId = req.query.pointId;
    console.log("........ pointId = ["+pointId+"]")

    fs.readFile(__dirname+"/pointDetailsdata/"+pointId+".json","utf8",(error, data)=>{
        if(!error){
            res.end(data);
        }
        else{
            let errRes = {
                Desc: "success",
                Msg: "success",
                Rows: [
                    {
                        xData: [],
                        yData: []
                    }
                ],
                Status: 102,
                Success: false,
                Total: 0
            }
            res.end(JSON.stringify(errRes));

        }
        
    })
})

var server = app.listen(8888, "127.0.0.1", () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server running at http://%s:%s", host, port);
})