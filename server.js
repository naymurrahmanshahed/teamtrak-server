require("dotenv").config();

const express = require("express");

//app
const app = express();

//port
const PORT = process.env.PORT || 4000;

//listen request
app.listen(PORT, () => {
  console.log(`connected to listening port ${PORT}`);
});
