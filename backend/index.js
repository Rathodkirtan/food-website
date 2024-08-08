const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
const userRouter=require('./router/user.router.js');
const loginuser=require('./router/login.router.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

try {
  mongoose.connect('mongodb://127.0.0.1:27017/fruitwebsite');
  console.log('connection success');
} catch (error) {
  console.log(error);
}

app.use('/user',userRouter);
app.use('/user',loginuser);

app.listen(8000,()=>{
  console.log('server start');
})