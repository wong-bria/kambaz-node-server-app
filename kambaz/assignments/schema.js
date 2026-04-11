import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    _id: String,
    course: String,
    title: String,
    description: String,
    points: Number,
    due: String,
    available: String,
    due: String,
    assignmentGroup: String,
    display: String,
    type: String,
    options: String,
    assign: String,
    until: String,
  },
  { collection: "assignments" }
);

export default assignmentSchema;