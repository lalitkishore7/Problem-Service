const express = require("express");

const { problemController } = require("../../controllers");

const problemRouter = express.Router();

// specific routes first
problemRouter.get("/ping", problemController.problemPingCheck);

problemRouter.get("/", problemController.getProblems);

problemRouter.get("/:id", problemController.getProblem);

problemRouter.put("/", problemController.addProblem);

problemRouter.put("/:id", problemController.updateProblem);

problemRouter.delete("/:id", problemController.deleteProblem);

module.exports = problemRouter;


