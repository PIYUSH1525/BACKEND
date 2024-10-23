const express = require('express');
const app = express();

app.get("/" , function(req,res){
    res.send("yea mera page ha toh");
})
app.get("/bhai" , function(req,res){
    res.send("yea mera bhai ka page ha");
})

app.listen(3000,function(){
    console.log("Server Running");
})