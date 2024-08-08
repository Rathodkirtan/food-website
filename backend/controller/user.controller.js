const mongoose = require("../Model/user.model.js");
const bcrypt = require("bcrypt");

const userdetails = (req, res) => {
  try {
    const { firstname, lastname, email, moblie, password } = req.body;

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        const userfind = await mongoose.findOne({ email: email });
        if (userfind)
          res.redirect('http://localhost:5173/signup')
        else {
          const user = await mongoose.create({
            firstname,
            lastname,
            email,
            moblie,
            password: hash,
          });
          console.log("user created");
          res.redirect('http://localhost:5173/signup')
        }
      });
    });
  } catch (error) {
    console.log("error::::::::::", error);
  }
};


module.exports = userdetails;
