import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: String,
    available: String,
    due: String,
    points: Number,
    shuffle: String,
    assignmentGroup: String,
    timeLimit: String,
    multipleAttempts: String,
    howManyAttempts: String,
    showCorrectAnswers: String,
    until: String,
    accessCode: String,
    oneQuestionPerTime: String,
    webcam: String,
    lock: String,
    published: Boolean,
    questions: Number,
    type: String

  },
  { collection: "quizzes" }
);

export default quizSchema;