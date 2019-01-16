var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHander = function connected(){
    console.log("....... 连接成功");
    eventEmitter.emit('data_reveived');
}

eventEmitter.on('connect', connectHander);
eventEmitter.on('data_reveived', ()=>{
    console.log("..... 数据接收成功。");
})

eventEmitter.emit('connect');
console.log(".... 程序执行完毕");

