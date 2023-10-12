 const categoriesModel = require("../models/categoriesModels");


const categoriesControllers = {};


categoriesControllers.getAll = async (req,res) => {
    const data = await categoriesModel.getAll();
    res.json({
        data
    })
}

categoriesControllers.create = async (req,res) => {
    const {name} = req.body;
    await categoriesModel.create(name);
    res.json({
        message: "data berhasil di tambahkan"
    })
}


categoriesControllers.getById = async (req, res) => {
    const {id} = req.params;
    const data = await categoriesModel.getCategoriesById(id);
    res.json({
        data
    })
}

categoriesControllers.updateCategories = async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    await categoriesModel.update(id,name);
    res.json({
        message: `data dengan id ${id} berhasil di update`
    })
}


categoriesControllers.deleteById = async (req, res) => {
    const {id} = req.params;

    await categoriesModel.deleteCategoriesById(id);

    res.json({
        message: `categories dengan id ${id} berhasil di hapus`
    })
}


module.exports = categoriesControllers