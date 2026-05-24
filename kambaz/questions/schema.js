import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    points: { type: Number, default: 0 },
    question: String,

    type: {
      type: String,
      enum: ["MULTIPLE CHOICE", "TRUE FALSE", "FILL IN THE BLANK"],
      default: "MULTIPLE CHOICE"
    },
    
    // For multiple choice
    choices: [{
      _id: String,
      text: String,
      isCorrect: Boolean
    }],
    
    // For true/false
    correctAnswer: Boolean,

    // For fill in the blank
    possibleAnswers: [String],      
  },
  { collection: "questions" }
);

export default questionSchema;