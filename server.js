// importing all the modules
const path = require('node:path');
const express = require('express');
require('dotenv').config();
const userRoutes=require("./routes/user.js");
const adminRoutes=require('./routes/admin.js');
const connectDB =require("./db/connectDB.js");

const app = express();

// middilewares
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// setting view engine
app.set("view engine","hbs");
app.set("views",path.join(__dirname,"views"))


// // importing the local module 
app.use('/admin',adminRoutes);
app.use('/user',userRoutes)


app.get('/',(req,res)=>{
    res.render("home")
})


connectDB()

// creating the port and listen in the HTTP Trafic
const PORT=process.env.PORT||3006
app.listen(PORT,()=>console.log('port is running'))