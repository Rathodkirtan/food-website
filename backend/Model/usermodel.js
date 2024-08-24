const mongoose=require('mongoose');

const userModel=mongoose.Schema({
  firstname:{
    type:String,
    require:true,
  },
  lastname:{
    type:String,
    require:true,
  },
  email:{
    type:String,
    require:true,
  },
  password:{
    type:String,
    require:true,
  },
  mobile:{
    type:Number,
    require:true,
  },
  address:{
    type:String,
    require:true,
  },
  role:{
    type:String,
    enum:['user','admin'],
    default:'user'
  },
  cart:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'',
  }],
  order:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'',
  }]
})

module.exports=mongoose.model('user',userModel)