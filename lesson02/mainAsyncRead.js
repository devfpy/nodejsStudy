var fs = require("fs");

fs.readFile("./input.txt",(error, data)=>{
    if(error){
        return console.log(error);
    }
    console.log(data.toString());
})

console.log("程序执行结束！");