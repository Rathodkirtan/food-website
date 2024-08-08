const express=require('express');
const userdetails=require('../controller/user.controller.js')
const router=express.Router();

router.post('/reg',userdetails);

module.exports=router;