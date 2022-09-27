var socket = io.connect('http://localhost:5000');

var username = document.getElementById('username');
var message = document.getElementById('message');
var send = document.getElementById('send');
var chat = document.getElementById('chat');
var broadcast = document.getElementById('broadcast');
send.addEventListener('click',function(){
    socket.emit('message',{
        username:username.value,
        message:message.value
    });
});
message.addEventListener('keypress',function(){
    socket.emit('broadcast',{
        username:username.value
    });
});
socket.on('new_msg',function(data){
    broadcast.innerHTML ='';
    chat.innerHTML += '<h4>Username:'+data.username+'</h4><p>message:'+data.message+'</p>';
});


socket.on('new_broadcast' ,function(data){
    broadcast.innerHTML = '<strong>'+ data.username +'</strong> write message <img src="/write.gif" style="width:25px;height:20px"/>';
});