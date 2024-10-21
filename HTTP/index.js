const http = require('node:http');

const MyServer = http.createServer(function(req,res){
    console.log("request recived");
    res.end("DONE HERE")
})

MyServer.listen(2000,function(){
    console.log("Server runninng");
    
})


as