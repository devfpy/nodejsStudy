var fs = require("fs");

var readerStream = fs.createReadStream('./input.txt');
var writerStream = fs.createWriteStream('./outputPipe.txt');

//管道读写操作
readerStream.pipe(writerStream);

readerStream.on("end",()=>{
    console.log(".... 文件读取完成");
});

writerStream.on("finish",()=>{
    console.log(".... 文件写入完成");
});

readerStream.on("error",(error)=>{
    console.log(".... 文件读取异常："+error.stack);
});

writerStream.on("error",(error)=>{
    console.log(".... 文件写入异常："+error.stack);
})