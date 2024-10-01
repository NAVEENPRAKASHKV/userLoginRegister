
const express = require('express');
const router= express.Router()
const userController=require('../controller/userController')

router.get('/login',(req,res)=>{
    res.render("user/login.hbs");
});
router.get('/register',(req,res)=>{
    res.render('user/register.hbs');

});

router.post('/register',userController.registerUser);





module.exports=router