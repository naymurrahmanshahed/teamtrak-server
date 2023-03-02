const express = require("express");
const Project = require("../models/projectModel");

//router
const router = express.Router();

//routes

//GET all project

router.get("/", (req, res) => {
  res.json({ message: "GET all projects" });
});

//GET a single project

router.get("/:id", (req, res) => {
  res.json({
    message: "GET a single project",
  });
});

//POST a new project
router.post("/", async (req, res) => {
  const data = req.body;
  try {
    //create document in mongodb
    const project = await Project.create({
      ...data,
    });
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//UPDATE a project

router.patch("/:id", (req, res) => {
  res.json({
    message: "Update a project",
  });
});

//DELETE a project

router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a project" });
});

module.exports = router;
