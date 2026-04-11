import mongoose from "mongoose"; 
import schema from "./schema.js";                   // load courses schema 
const model = mongoose.model("CourseModel", schema);  // create mongoose model from the schema
export default model;