const express=require('express');
const router=express.Router();
const {regitrastion,login,logout}=require('../controller/usercontroller');

router.post('/regitrastion',regitrastion);
router.post('/login',login);
router.post('/logout',logout)

module.exports=router