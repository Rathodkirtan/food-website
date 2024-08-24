const usermodel=require('../Model/usermodel.js');
const bcrypt=require('bcrypt');
let jwt = require('jsonwebtoken')
const dotenv=require('dotenv');

dotenv.config();
const regitrastion=async (req,res)=>{
  const {firstname,lastname,email,address,mobile,password}=req.body;
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt,async function(err, hash) {
        const user = await usermodel.findOne({email});
        if(user) return res.send("user is already exits");
        const userCreate=await usermodel.create({
          firstname,
          lastname,
          email,
          address,
          mobile,
          password:hash,
        })
        let token = jwt.sign({email}, process.env.Token);
        res.cookie('token',token)
        res.redirect('http://localhost:5173/signup');
    });
});
}

const login=async (req,res)=>{
  const {email,password}=req.body;
  let user=await usermodel.findOne({email});
  if(!user) return res.send("please register user");
  bcrypt.compare(password, user.password, function(err, result) {
    if(result){
      let token = jwt.sign({email}, process.env.Token);
      res.cookie('token',token)
      res.redirect("http://localhost:5173")
    }else{
      res.send("password is incrrect");
    }
});
} 

const logout=(req,res)=>{
  res.cookie('token','');
  res.redirect("http://localhost:5173/login")
}

module.exports={regitrastion,login,logout}