const express = require('express')
const app = express();

app.get("/", (req, res)=>{
    res.send("Welcome to nodejs");
});

app.listen(4000, ()=>{
    console.log("app is started");
});