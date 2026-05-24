import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export default function QuizAttemptsDao() {

  // Create a new quiz attempt (student submits quiz)
  async function createQuizAttempt(attempt) {
    // const newAttempt = { ...attempt, _id: uuidv4() };
    
    const { userId, quizId } = attempt;

    // Step 1: count existing attempts
    const count = await model.countDocuments({ userId, quizId });

    // Step 2: assign next attempt number
    const attemptNumber = count + 1;

    // Step 3: create new attempt
    const newAttempt = {
      ...attempt,
      _id: uuidv4(),
      attemptNumber,
    };
    return await model.create(newAttempt);
  }

  // Get latest attempt
  async function findLatestAttempt(userId, quizId) {
    return await model
      .findOne({ userId, quizId })
      .sort({ attemptNumber: -1 });
  }


  return {
    createQuizAttempt,
    findLatestAttempt,
  };
}