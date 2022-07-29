const express = require("express");
const app = express();
const http = require("http");
const api = require("./api.json");
const port = 3000;

const server = http.createServer(app);

app.get("/", (req,res)=>{
    res.send("Express Server home page..");
});

app.get("/api", (req,res)=>{
    res.send(JSON.stringify(api));
});

server.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`);
});
