require("dotenv").config();

const express = require("express");

//app
const app = express();

//middlewares

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the home directory " });
});

//port
const PORT = process.env.PORT || 4000;

//listen request
app.listen(PORT, () => {
  console.log(`connected to listening port ${PORT}`);
});
