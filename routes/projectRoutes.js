const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
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

router.delete("/:id", deleteProject);

module.exports = router;
