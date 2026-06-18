const { StatusCodes } = require('http-status-codes')
const NotImplemented = require('../errors/unimplemented.error')

function problemPingCheck(req, res) {
    return res.json({message: "Problem controller service is alive"})
}

function addProblem(req, res, next) {
    try {
        throw new NotImplemented('addProblem')
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
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