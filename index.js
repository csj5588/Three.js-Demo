const express = require("express");

const app = express();

app.use(express.static("www"));

app.listen(8080,()=>{
    console.log("服务开启在8080端口");
});