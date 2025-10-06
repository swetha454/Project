const express=require("express");
const path=require("path");
const bcrypt=require("bcrypt");

const app=express();

app.set("view engine","ejs");

app.get("/",(req,res)=> {
    res.render("login");
});

app.get("/signup",(req,res)=> {
    res.render("signup");
});

const port = 2000;
app.listen(port,()=> {
    console.log(`Server running on Port: http://localhost:${port}`);
})
