var fs = require("fs");

var inputData = fs.readFileSync('input.txt','utf8');
console.log(inputData.toString());
console.log("文件读取完成！");