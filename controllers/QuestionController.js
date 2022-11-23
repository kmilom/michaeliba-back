import QuestionModel from "../models/QuestionModel.js";

//Metodos para el CRUD

//Mostrar todas las preguntas
export const getAllQuestions = async (req, res) => {
    try{
        const questions = await QuestionModel.findAll();
        res.json(questions);
    }catch (error) {
        res.json({message: error.Message});
    }
}

//Mostrar una pregunta
export const getQuestion = async (req, res) => {
    try{
        const question = await QuestionModel.findAll({
            where:{ id: req.params.id }
        });
        res.json(question[0]);
    }catch (error) {
        res.json({message: error.Message});
    }
}

//Crear pregunta
export const createQuestion = async (req, res) => {
    try{
        await QuestionModel.create(req.body);
        res.json({"message": "registro creado"})
    }catch (error) {
        res.json({message: error.Message});
    }
}

//Actualizar pregunta
export const updateQuestion = async (req, res) => {
    try {
        QuestionModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({"message": "registro actualizado"})
    } catch (error) {
        res.json({message: error.Message});
    }
}

//Eliminar una pregunta
export const deleteQuestion = async (req, res) => {
    try {
        await QuestionModel.destroy({
            where: { id: req.params.id }
        });
        res.json({"message": "registro eliminado"})
    } catch (error) {
        res.json({message: error.Message});
    }
}