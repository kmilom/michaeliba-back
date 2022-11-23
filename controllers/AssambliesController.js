import AssambliesModel from "../models/AssambliesModel.js";

//Mostrar todas las asambleas
export const getAllAssamblies = async (req, res) => {
    try{
        const assamblies = await AssambliesModel.findAll();
        res.json(assamblies);
    }catch (error) {
        res.json({message: error.Message});
    }
}