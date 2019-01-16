var events = require('events');
var eventEmitter = new events.EventEmitter();

//监听器 #1
var listener1 = ()=>{
    console.log("...... 监听器 #1 执行");
}

//监听器 #2
var listener2 = ()=>{
    console.log("...... 监听器 #2 执行");
}

//绑定connect事件 处理程序listener1
eventEmitter.addListener("connect", listener1);

//绑定connect事件 处理程序listener2
eventEmitter.on("connect", listener2);

var eventListeners = eventEmitter.listenerCount('connect');
console.log("...... 事件connect有「"+eventListeners+"」个监听者");

//处罚connect事件
eventEmitter.emit("connect");

//移除connect事件 listener1监听者
eventEmitter.removeListener('connect',listener1);
console.log("......listener1 不再监听connect事件");

eventEmitter.emit('connect');

eventListeners = eventEmitter.listenerCount('connect');
console.log("...... 事件connect有「"+eventListeners+"」个监听者");

console.log("...... 程序执行完毕");



