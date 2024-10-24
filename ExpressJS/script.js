const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log("Middle ware")
    next();
})
app.use(function(req,res,next){
    console.log("One mor eMiddle ware")
    next();
})

app.get("/" , function(req,res){
    res.send("yea mera page ha toh");
})
app.get("/bhai" , function(req,res){
    res.send("yea mera bhai ka page ha");
})

app.listen(3000,function(){
    console.log("Server Running");
})