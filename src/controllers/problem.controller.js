const { StatusCodes } = require('http-status-codes')

function problemPingCheck(req, res) {
    return res.json({message: "Problem controller service is alive"})
}

function addProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    })
}

function getProblem(req, res) {
     return res.status(StatusCodes.NOT_IMPLEMENTED).json({
       message: "Not implemented",
     });
}

function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not implemented",
    });
}

function updateProblem(req, res) {
     return res.status(StatusCodes.NOT_IMPLEMENTED).json({
       message: "Not implemented",
     });
}

function deleteProblem(req, res) {
     return res.status(StatusCodes.NOT_IMPLEMENTED).json({
       message: "Not implemented",
     });
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    problemPingCheck
}