const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tech: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    manager: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    dev: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//create model
module.exports = mongoose.model("Project", projectSchema);
