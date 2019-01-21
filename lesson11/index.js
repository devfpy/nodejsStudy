var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socket = require('socket.io');
var io = socket(server);
var _ = require('underscore')._;

app.get('/', (req, res)=>{
    res.send('<h1>Welcome to Realtime Server</h1>');
})

//在线用户
var onlineUsers = {};

//在线人数
var onlineCount = 0;

io.on('connection', (socket)=>{
    console.log(".... New User Connected");

    //监听新用户加入
    socket.on('login',(obj)=>{
        //将用户的唯一标识当作socket的name
        socket.name = obj.userid;

        //检查在线列表， 如果不在则加入
        if(!onlineUsers.hasOwnProperty(obj.userid)){
            onlineUsers[obj.userid] = obj.username;

            //在线人数+1
            onlineCount ++;
        }

        //向所有客户端广播用户加入
        io.emit('login', {
            onlineUsers:onlineUsers, 
            onlineCount:onlineCount, 
            user:obj
        });

        console.log(obj.username+"加入了聊天室");
    });

    //监听用户退出
    socket.on('disconnect', ()=>{
        //将用户从在线用户列表中删除
        if(onlineUsers.hasOwnProperty(socket.name)){
            //退出用户的信息
            var obj = {userid:socket.name, username:onlineUsers[socket.name]};

            //删除
            delete onlineUsers[socket.name];

            //在线人数-1
            onlineCount--;

            //向所有客户端广播用户退出
            io.emit('logout', {onlineUsers:onlineUsers, onlineCount:onlineCount, user:obj});
            console.log(obj.username+"退出聊天室");

        }
    })

    //监听用户发布内容
    socket.on('message', (obj)=>{
        //向所有客户端广播消息
        io.emit('message', obj);
        console.log(obj.username+'说：'+obj.content);
    })


    //向指定的用户发送消息
    socket.on("messageTo",(obj)=>{
        
        let toUserId = obj.toUserId;

        console.log("..... 向指定的用户发送消息 ["+toUserId+"] ");

        console.log(onlineUsers);
        console.log(onlineUsers[toUserId]);

        if(onlineUsers[toUserId]){
            //用户存在
            let toSocket = _.findWhere(io.sockets.sockets, {name:toUserId});
            toSocket.emit('message', obj);
        }

    })
});


server.listen(8000, ()=>{
    console.log("Chat Server running at 8000");
})