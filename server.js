const express = require('express');
const app = express();
const port = 3000;

let count = 0;
app.get('/api',(req,res)=>{
    count++;
    res.json({count});
})

app.listen(port,()=>{
    console.log(`server listen on port ${port}`)
})