import express from 'express'
import { createQuestion, deleteQuestion, getAllQuestions, getQuestion, updateQuestion } from '../controllers/QuestionController.js';

const router = express.Router()

router.get('/', getAllQuestions)
router.get('/:id', getQuestion)
router.post('/', createQuestion)
router.put('/:id', updateQuestion)
router.delete('/:id', deleteQuestion)

export default router;