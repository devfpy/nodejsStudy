var fs = require("fs");
var zlib = require("zlib");

var readerStream = fs.createReadStream("./input.txt","utf8").pipe(zlib.createGzip()).pipe(fs.createWriteStream('./input.txt.gz'));

console.log("..... 文件压缩成功 ！");
