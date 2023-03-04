require("dotenv").config();

const express = require("express");

const cors = require("cors");

const mongoose = require("mongoose");

const projectRoutes = require("./routes/projectRoutes");

const userRoutes = require("./routes/userRoutes");

//app
const app = express();

//middlewares

app.use(cors());

app.use(express.json()); //middlewares for post req

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// connect to router
app.use("/api/projects", projectRoutes);
app.use("/api/user", userRoutes);

//port
const PORT = process.env.PORT || 4000;

//mongodb
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_KEY)
  .then(() => {
    //listen for request
    app.listen(PORT, () => {
      console.log(` conected to mongoose Listening port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
