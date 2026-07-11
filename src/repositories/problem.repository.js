const { Problem } = require('../models');

class ProblemRepository{
    async createProblem(problemData) {
        try {
            return await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases : [],
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemRepository;