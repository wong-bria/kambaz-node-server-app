import express from 'express'; 
import Hello from './Hello.js';
import Lab5 from "./Lab5/index.js"; 
import cors from "cors"; 



const app = express() 
app.use(cors());                    // make sure cors is used right after creating the app 
app.use(express.json());            // make sure this statement occurs AFTER setting up CORS but BEFORE all the routes
Hello(app)
Lab5(app); 
app.listen(process.env.PORT || 4000) 