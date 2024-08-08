const express=require('express');
const loginuser=require('../controller/login.controller.js')
const router=express.Router();

router.post('/login',loginuser);

module.exports=router;