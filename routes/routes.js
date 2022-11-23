import express from 'express'
import { getAllAssamblies } from '../controllers/AssambliesController.js';
import { createQuestion, deleteQuestion, getAllQuestions, getQuestion, updateQuestion } from '../controllers/QuestionController.js';

const router = express.Router()

router.get('/questions/', getAllQuestions)
router.get('/questions/:id', getQuestion)
router.post('/questions/', createQuestion)
router.put('/questions/:id', updateQuestion)
router.delete('/questions/:id', deleteQuestion)

router.get('/assamblies/', getAllAssamblies)

export default router;