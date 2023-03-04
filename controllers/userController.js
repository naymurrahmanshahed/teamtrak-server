const mongoose = require("mongoose");

const User = require("../models/userModel");

//Login

const loginUser = async (req, res) => {
  res.json({ message: "log in" });
};

//signup

const signupUser = async (req, res) => {
  res.json({ message: "signup" });
};

module.exports = {
  loginUser,
  signupUser,
};
