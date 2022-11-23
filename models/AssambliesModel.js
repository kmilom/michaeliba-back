import db from "../database/db.js";
import { DataTypes } from "sequelize";

const AssambliesModel = db.define('assamblies', {
    date: { type: DataTypes.DATE },
    time: { type: DataTypes.TIME },
    duration: { type: DataTypes.TIME },
    quorum: { type: DataTypes.FLOAT },
    suburb: { type: DataTypes.STRING },
})

export default AssambliesModel