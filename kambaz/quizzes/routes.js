import QuizzessDao from "../quizzes/dao.js"; 

export default function QuizzesRoutes(app) { 
  const dao = QuizzessDao(); 

  const findQuizzesForCourse = async (req, res) => { 
    const { courseId } = req.params; 
    const quizzes = await dao.findQuizzesForCourse(courseId); 
    res.json(quizzes); 
  } 


  app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse); 

 
} 