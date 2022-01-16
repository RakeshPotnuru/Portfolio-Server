const express = require("express");

const router = express.Router();

const { ProjectController } = require("../controllers/project.controller");

router.get("/projects", (req, res) => {
  res.json(ProjectController.getAllProjects());
});

module.exports = router;
