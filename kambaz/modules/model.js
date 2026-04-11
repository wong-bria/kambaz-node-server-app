import mongoose from "mongoose"; 
import schema from "./schema.js";                   // load modules schema 
const model = mongoose.model("ModuleModel", schema);  // create mongoose model from the schema
export default model;