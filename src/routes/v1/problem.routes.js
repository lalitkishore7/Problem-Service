const express = require("express");

const { problemController } = require("../../controllers");

const problemRouter = express.Router();

// If any request comes and routes starts with /ping, we map it to problemController
problemRouter.get("/ping", problemController.problemPingCheck);

problemRouter.get("/", problemController.getProblems);

problemRouter.get("/:id", problemController.getProblem);

problemRouter.put("/", problemController.addProblem);

problemRouter.put("/:id", problemController.updateProblem);

problemRouter.delete("/:id", problemController.deleteProblem);

module.exports = problemRouter;


