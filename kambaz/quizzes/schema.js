import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    _id: string,
    title: string,
    course: string,
    available: string,
    due: string,
    points: number,
    shuffle: boolean,
    assignmentGroup: string,
    timeLimit: string,
    multipleAttempts: boolean,
    howManyAttempts: string,
    showCorrectAnswers: string,
    until: string,
    accessCode: string,
    oneQuestionPerTime: boolean,
    webcam: boolean,
    lock: boolean,
    published: boolean,
    questions: number,
    type: string
  },
  { collection: "quizzes" }
);

export default quizSchema;