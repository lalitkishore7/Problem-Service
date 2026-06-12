function problemPingCheck(req, res) {
    return res.json({message: "Problem controller service is alive"})
}

function addProblem(req, res) {
    
}

function getProblem(req, res) {
    
}

function getProblems(req, res) {

}

function updateProblem(req, res) {
    
}

function deleteProblem(req, res) {}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    problemPingCheck
}