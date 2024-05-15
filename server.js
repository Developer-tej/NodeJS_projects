const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req,res)=>{
    res.send("<h1>Hello on Home route</h1>");
})

app.listen(port,()=>{
    console.log(`Server running on port number ${port}`);
})