import QuestionsDao from "../questions/dao.js"; 

export default function QuestionsRoutes(app) { 
  const dao = QuestionsDao(); 

  const findQuestionsForQuiz = async (req, res) => { 
    const { quizId } = req.params; 
    const questions = await dao.findQuestionsForQuiz(quizId); 
    res.json(questions); 
  } 

  const createQuestionForQuiz = async (req, res) => { 
    const { quizId } = req.params; 
    const question = { 
      ...req.body, 
      quiz: quizId, 
    }; 
    const newQuestion = await dao.createQuestion(quizId, question); 
    res.send(newQuestion); 
  }

  const deleteQuestion = async (req, res) => { 
    const { quizId, questionId } = req.params; 
    const status = await dao.deleteQuestion(quizId, questionId); 
    res.send(status); 
  } 

  const updateQuestion = async (req, res) => { 
    const { quizId, questionId } = req.params; 
    const questionUpdates = req.body; 
    const status = await dao.updateQuestion(quizId, questionId, questionUpdates); 
    res.send(status); 
  } 


  app.put("/api/quizzes/:quizId/questions/:questionId", updateQuestion); 
  app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz); 
  app.post("/api/quizzes/:quizId/questions", createQuestionForQuiz); 
  app.delete("/api/quizzes/:quizId/questions/:questionId", deleteQuestion);
} 