import db from "../database/db.js";
import { DataTypes } from "sequelize";

const QuestionModel = db.define('questions', {
    question: { type: DataTypes.STRING },
    assamblies_id: { type: DataTypes.NUMBER },
})

export default QuestionModel;