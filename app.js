const express = require('express');
const app =express();
const port = process.env.PORT || 3000

app.get('/',(res,reg)=>{
    res.send('Hello to heroku website')
})

app.listen(port,()=>{
    console.log(`APP listen on port ${port}!`);
})