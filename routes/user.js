
const express = require('express');
const router= express.Router()
const userController=require('../controller/userController')

router.get('/login',userController.loadLogin)
router.get('/register',userController.loadRegister)
router.post('/register',userController.registerUser);
router.post('/login',userController.login);





module.exports=router