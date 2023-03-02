require("dotenv").config();

const express = require("express");

const projectRoutes = require("./routes/projectRoutes");

//app
const app = express();

//middlewares

app.use(express.json()); //middlewares for post req

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// connect to router
app.use("/api/projects", projectRoutes);

//port
const PORT = process.env.PORT || 4000;

//listen request
app.listen(PORT, () => {
  console.log(`connected to listening port ${PORT}`);
});
