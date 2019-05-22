
const express = require("express");
const register = express.Router();
const bodyParser = require("body-parser")



register.route("/").get((req,res)=>{
    res.render('register');
})
register.route("/").post((req,res)=>{
    res.send(body)
})










module.exports=register