const { Problem } = require("../models");
const NotFound = require("../errors/notfound.error");
const logger = require("../config/logger.config");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      return await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        throw new NotFound("Problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const problem = await Problem.findByIdAndDelete(id);
      if (!problem) {
        logger.error(`problem.repository: Problem not found with id ${id} in the db.`);
        throw new NotFound("Problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateProblem(problemData, id) {
    try {
      const newUpdatedProblem = await Problem.findByIdAndUpdate(id, {
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : []
      },
        {
        new: true
      });

      if (!newUpdatedProblem) {
        throw new NotFound("Problem", id);
      }

      return newUpdatedProblem;
    }
    catch(error) {
      console.log(error);
      throw error;
    }
  } 
}

module.exports = ProblemRepository;
