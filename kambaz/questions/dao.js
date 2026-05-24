import { v4 as uuidv4 } from "uuid"; 
import model from "../quizzes/model.js";

export default function QuestionsDao() {
  async function createQuestion(quizId, question) {
    const newQuestion = { ...question, _id: uuidv4() };
    const status = await model.updateOne( 
      { _id: quizId }, 
      { $push: { questions: newQuestion } } 
    ); 
    return newQuestion;
  }

   async function findQuestionsForQuiz(quizId) {
      const quiz = await model.findById(quizId); 
      return quiz.questions;
  }

  async function deleteQuestion(quizId, questionId) { 
    const status = await model.updateOne( 
      { _id: quizId }, 
      { $pull: { questions: { _id: questionId } } } 
    ); 
    return status; 
  } 

  async function updateQuestion(quizId, questionId, questionUpdates) {
    const quiz = await model.findById(quizId);
    const question = quiz.questions.id(questionId);
    Object.assign(question, questionUpdates); 
    await quiz.save();
    return question; 
  }

  
  return {
    findQuestionsForQuiz,
    createQuestion,
    deleteQuestion,
    updateQuestion
  };
} 
