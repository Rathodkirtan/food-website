const mongoose = require("../Model/user.model.js");
const bcrypt = require("bcrypt");

const loginuser = async (req, res) => {
  const { email, password } = req.body;
  const user = await mongoose.findOne({ email: email });
  if (user) {
    bcrypt.compare(password, user.password, function (err, result) {
      if (result) res.redirect("http://localhost:5173/");
      console.log(result);
    });
  }else{
    res.status(404).json({message:"something is rong"})
  }
};

module.exports = loginuser;
