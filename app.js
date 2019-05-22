const express = require('express');
const app =express();
const port = process.env.PORT || 3000;
const path = require('path');
const register = require("./routes/register");
const pagesRoutes =require("./routes/pagesRoutes");



app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'/Public')));



app.use('/',pagesRoutes);

app.use('/register',register)


app.listen(port,()=>{
    console.log(`APP listen on port ${port}!`);
})