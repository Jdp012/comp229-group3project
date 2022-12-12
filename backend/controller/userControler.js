const User = require("../models/user");
const sendTokenToCookie = require("../utils/cookies");

exports.signUp = async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });

    if (user) {
      return res.status(400).json({ message: "User already exist" });
    }

    const newUser = await User.create({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      passport: req.body.passport,
      username: req.body.username,
    });

    sendTokenToCookie(newUser, 200, res);
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
    console.log(error.message);
  }
};

exports.signIn = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
    console.log(error.message);
  }
};
