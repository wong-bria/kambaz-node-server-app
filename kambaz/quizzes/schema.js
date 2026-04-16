import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: String,
    available: String,
    due: String,
    points: Number,
    shuffle: Boolean,
    assignmentGroup: String,
    timeLimit: String,
    multipleAttempts: Boolean,
    howManyAttempts: String,
    showCorrectAnswers: String,
    until: String,
    accessCode: String,
    oneQuestionPerTime: Boolean,
    webcam: Boolean,
    lock: Boolean,
    published: Boolean,
    questions: Number,
    type: String
  },
  { collection: "quizzes" }
);

export default quizSchema;