const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
} = require("../controllers/projectController");

//router
const router = express.Router();

//routes

//GET all project

router.get("/", getAllProjects);

//GET a single project

router.get("/:id", getSingleProject);

//POST a new project
router.post("/", postProject);

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
