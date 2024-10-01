
const express = require('express');
const router= express.Router()

router.get('/login',(req,res)=>{
    res.render("user/user.hbs");
});
router.get('/register',(req,res)=>{
    res.render('user/register.hbs');

});

router.post('/register',(req,res)=>{
    console.log(req.body);
    res.json(req.body);
});





module.exports=router