const express = require('express');


const app = express();   //this is like creating my clinic 

function sum(n){
    let ans = 0;
    for(let  i = 0; i<n ;i++){
        ans= ans+i;
        
    }
    return ans;
}

app.get('/', function(req,res){
    const n =  req.query.n;
    let a = sum(n);
    res.send('The sum of the first '+n+' numbers is '+a);

})

app.listen(3000)   //this is like giving room munber