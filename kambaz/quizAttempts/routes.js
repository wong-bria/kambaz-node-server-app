import QuizAttemptsDao from "./dao.js";

export default function QuizAttemptsRoutes(app) {
  const dao = QuizAttemptsDao();

  // Create a quiz attempt (student submits quiz)
  const createQuizAttempt = async (req, res) => {
    const attempt = req.body;
    const newAttempt = await dao.createQuizAttempt(attempt);
    res.json(newAttempt);
  };

  // Get latest attempt for a student in a quiz
  const findLatestAttempt = async (req, res) => {
    const { userId, quizId } = req.params;
    const attempt = await dao.findLatestAttempt(userId, quizId);
    res.json(attempt);
  };

  // Routes
  app.post("/api/quizzes/:quizId/quizAttempts", createQuizAttempt);
  app.get("/api/quizzes/:quizId/users/:userId/attempt", findLatestAttempt);
}