var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream('./input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('./inputUngzip.txt'));
console.log(".... 文件解压完成！");