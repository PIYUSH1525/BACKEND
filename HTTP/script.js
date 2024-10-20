const http = require('node:http')

const server = http.createServer(function(req,res){
    res.end("Hello Sir")
})

server.listen(2000)

// TO see the live action of server type localhost:2000 in browser