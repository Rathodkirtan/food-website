const mongoose=require('mongoose');
 
const userSchema= mongoose.Schema({
  firstname:String,
  lastname:String,
  email:String,
  moblie:Number,
  password:String,
})

module.exports=mongoose.model('regstration',userSchema);

