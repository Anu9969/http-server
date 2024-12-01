const express = require('express');


const app = express();   //this is like creating my clinic 

app.get('/', function(req,res){
    res.send('Hello world')
})

app.listen(3000)   //this is like giving room munber