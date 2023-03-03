const mongoose = require("mongoose");
const Project = require("../models/projectModel");

//get all projects

const getAllProjects = async (req, res) => {
  const projects = await Project.find({}).sort({ createdAt: -1 }); //descending order

  res.status(200).json(projects);
};

//get a single project

const getSingleProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Please Enter Valid Id" });
  }

  const project = await Project.findById(id);

  if (!project) {
    return res.status(404).json({ error: "No Project Found" });
  }

  res.status(200).json(project);
};

//post a single project

const postProject = async (req, res) => {
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
};

//delete a project
const deleteProject = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Please Enter Valid Id" });
  }

  const project = await Project.findOneAndDelete({ _id: id });

  if (!project) {
    return res.status(400).json({ error: "No Project Found" });
  }

  res.status(200).json(project);
};

//update a project

const updateProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ error: "Please Enter Valid Id" });
  }

  const project = await Project.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!project) {
    return res.status(400).json({ error: "No Project Found" });
  }

  res.status(200).json(project);
};

module.exports = {
  postProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
};
