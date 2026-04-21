import mongoose from "mongoose";
import questionSchema from "../questions/schema.js";

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
    type: String,
    questions: [questionSchema],
    description: String
  },
  { collection: "quizzes" }
);

export default quizSchema;