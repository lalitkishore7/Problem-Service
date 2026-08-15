const { StatusCodes } = require('http-status-codes')
const NotImplemented = require('../errors/unimplemented.error')
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');

const problemService = new ProblemService(new ProblemRepository());

function problemPingCheck(req, res) {
    return res.json({message: "Problem controller service is alive"})
}

async function addProblem(req, res, next) {
  try {
    const newproblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Successfully created a new problem',
      error: {},
      data: newproblem
        })
    } catch (error) {
        next(error);
    }
}

async function getProblem(req, res, next) {
  try {
    const problem = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched a problem",
      error: {},
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Successfully fetched all problems',
      error: {},
      data: response
        })
  } catch (error) {
    next(error);
  }
}

async function updateProblem(req, res, next) {
  try {
    const newUpdatedProblem = await problemService.updateProblem(req.body, req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully updated the problem",
      error: {},
      data: newUpdatedProblem,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteProblem(req, res, next) {
  try {
    const problemId = await problemService.deleteProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Successfully deleted a problem',
      error: {},
      data: problemId
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    problemPingCheck
}