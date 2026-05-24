import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const quizAttemptSchema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4 },

    userId: { type: String, ref: "User", required: true },
    quizId: { type: String, ref: "Quiz", required: true },

    // Store responses per question
    responses: {
      type: Map,
      of: mongoose.Schema.Types.Mixed, // string | boolean
    },

    score: Number,
    totalPoints: Number,

    attemptNumber: Number,

    startedAt: Date,
    submittedAt: Date,
  },
  { collection: "quizAttempts" }
);

export default quizAttemptSchema;