const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//manual method create
userSchema.statics.signUp = async function (email, password) {
  //exit email in mongodb
  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email already used");
  }

  //password encrypt
  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);

  //create a user

  const user = await this.create({ email, password: hash });

  return user;
};

//create model
module.exports = mongoose.model("User", userSchema);
