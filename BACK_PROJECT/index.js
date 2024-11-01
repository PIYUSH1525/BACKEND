const express = require('node:express')
const app = express

app.use(express.json());
app.use(express.urlencoded({extended:true}));

