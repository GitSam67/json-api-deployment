const express = require("express");
const app = express();
const api = require("./api.json");
const port = 3000;

app.get("/", (req,res)=>{
    res.send("Simple Json Api");
});

app.get("/api", (req,res)=>{
    res.send(api);
});

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
});