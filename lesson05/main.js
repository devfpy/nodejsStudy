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

//获取文件信息
fs.stat('./input.txt',(err, stats)=>{
    if(err){
        console.log(".... 获取文件信息失败 "+err.stack);
        return;
    }

    console.log(stats);
    console.log("读取文件信息成功！");

    console.log("是否是文件："+stats.isFile());
    console.log("是否是目录："+stats.isDirectory());
    console.log("是否是块设备："+stats.isBlockDevice());
    console.log("是否是字节设备："+stats.isCharacterDevice());
    console.log("是否是软链接："+stats.isSymbolicLink());
    console.log("是否是FIFO："+stats.isFIFO());
    console.log("是否是SOCKET："+stats.isSocket());
    
});






