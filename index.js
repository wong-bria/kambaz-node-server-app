import express from 'express'; 
import mongoose from 'mongoose';
import Hello from './Hello.js';
import Lab5 from "./Lab5/index.js"; 
import cors from "cors"; 
import db from "./kambaz/database/index.js"; 
import UserRoutes from "./kambaz/users/routes.js"; 
import CourseRoutes from "./kambaz/courses/routes.js"; 
import ModuleRoutes from "./kambaz/modules/routes.js";
import AssignmentRoutes from "./kambaz/assignments/routes.js";
import EnrollmentsRoutes from './kambaz/enrollments/routes.js';
import "dotenv/config";                             // import the new dotenv library to read .env file
import session from "express-session"; 


const CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kambaz"
mongoose.connect(CONNECTION_STRING);                // connect to the kambaz database 
const app = express() 

// make sure cors is used right after creating the app 
app.use(cors({
  credentials: true,                                          // support cookies 
  origin: process.env.CLIENT_URL || "http://localhost:3000",  // restrict cross origin resource sharing to the react application 
}));
const sessionOptions = { 
  secret: process.env.SESSION_SECRET || "kambaz", 
  resave: false, 
  saveUninitialized: false, 
};

// in production turn on proxy support configure cookies for remote server
if (process.env.SERVER_ENV !== "development") { 
  sessionOptions.proxy = true; 
  sessionOptions.cookie = { 
    sameSite: "none", 
    secure: true, 
    domain: process.env.SERVER_URL, 
  }; 
} 
app.use(session(sessionOptions));

// make sure this comes AFTER configuring cors and session, but BEFORE all the routes 
app.use(express.json());            // make sure this statement occurs AFTER setting up CORS but BEFORE all the routes

UserRoutes(app, db);
CourseRoutes(app, db); 
ModuleRoutes(app, db);
AssignmentRoutes(app, db);
EnrollmentsRoutes(app, db);
Hello(app)
Lab5(app); 
app.listen(process.env.PORT || 4000) 