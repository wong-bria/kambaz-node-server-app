import { v4 as uuidv4 } from "uuid"; 
import model from "./model.js";

export default function QuizzesDao() {
  async function findQuizzesForCourse(courseId) {
    return await model.find({ course: courseId });
  }

  
  return {
    findQuizzesForCourse,
  };
} 
