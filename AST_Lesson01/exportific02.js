const fs = require('fs')
const path = require('path')
const recast = require("recast");


const code = [
    "function add(a, b) {",
    "  return a +",
    "    // Weird formatting, huh?",
    "    b;",
    "}"
].join("\n");

console.log(
    recast.print(recast.parse(code)).code
);

//命令行读取文件
recast.run( function(ast, printSource){
    printSource(ast)
})

recast.run