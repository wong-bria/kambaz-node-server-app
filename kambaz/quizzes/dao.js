import { v4 as uuidv4 } from "uuid"; 
import model from "./model.js";

export default function QuizzesDao() {
  async function createQuiz(quiz) {
    const newQuiz = { ...quiz, _id: uuidv4() };
    return await model.create(newQuiz);
  }

  async function findQuizzesForCourse(courseId) {
    return await model.find({ course: courseId });
  }

  async function deleteQuiz(quizId) { 
    return await model.deleteOne({ _id: quizId });
  } 

  async function updateQuiz(quizId, quizUpdates) {
    await model.updateOne(
      { _id: quizId },
      { $set: quizUpdates }
    );

    return await model.findOne({ _id: quizId });
  }

  
  return {
    findQuizzesForCourse,
    createQuiz,
    deleteQuiz,
    updateQuiz
  };
} 
