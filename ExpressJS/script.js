const express = require('express');
const app = express();

app.use(function(req,res,next){
    console.log("Middle ware")
    next();
})
app.get("/" , function(req,res){
    res.send("yea mera page ha toh");
})

app.use(function(req,res,next){
    console.log("One mor eMiddle ware")
    next();
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/bhai" , function(req,res,next){
    // res.send("yea mera bhai ka page ha");
    return next(new Error("Something Wrong"))
})

app.use(function(err,req,res,next){
    console.error(err)
    res.status(500).send("ERoOR In SERVER")
})

app.listen(3000,function(){
    console.log("Server Running");
})