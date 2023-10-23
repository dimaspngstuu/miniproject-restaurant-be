 const categoriesModel = require("../models/categoriesModels");


const categoriesControllers = {};


categoriesControllers.getAll = async (req,res) => {
    const data = await categoriesModel.getAll();
    res.json({
        "status":"OK",
        data
    })
}

categoriesControllers.create = async (req,res) => {
    const {name} = req.body
    if(!nama || typeof name !== "string"){
        res.status(400).json({
            status: "nama harus di isi dan harus berbentuk huruf"
        })
    }
    await categoriesModel.create(name);
    res.json({
        status:"OK",
        message: "data berhasil di tambahkan"
    })
}


categoriesControllers.getById = async (req, res) => {
    const {id} = req.params;
    const data = await categoriesModel.getCategoriesById(id);
    res.json({
        status:"OK",
        data
    })
}

categoriesControllers.updateCategories = async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    await categoriesModel.update(id,name);
    res.json({
        status:"OK",
        message: "Data berhasil diperbarui"
    })
}


categoriesControllers.deleteById = async (req, res) => {
    const {id} = req.params;

    await categoriesModel.deleteCategoriesById(id);

    res.json({
        status:"OK",
        message: "Data berhasil dihapus"
    })
}


module.exports = categoriesControllers