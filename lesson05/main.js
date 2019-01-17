var fs = require("fs");
var data = "";

//创建读取流
var readerStream = fs.createReadStream('./input.txt');
readerStream.setEncoding("utf8");

//创建写入流
var writerStream = fs.createWriteStream('./output.txt', 'utf8');


readerStream.on("data", (chunk)=>{
    data+=chunk;
    writerStream.write(chunk,'utf8');
});

readerStream.on("end", ()=>{
    writerStream.end();
    console.log(".... 文件读取完毕");
    console.log(data);

});

readerStream.on("error",(error)=>{
    console.log(".... 文件读取异常 "+error.stack);
});


writerStream.on("finish", ()=>{
    console.log(".... 文件写入完成");
});

writerStream.on("error",(error)=>{
    console.log(".... 文件写入异常 "+error.stack);
})






