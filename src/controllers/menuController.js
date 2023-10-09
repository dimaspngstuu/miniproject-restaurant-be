const menuModel = require("../models/menuModel")

const menuController = {}

menuController.getAll = async (req,res) => {
    const menus = await menuModel.getAll()
    res.json({
        message : menus
    })
}

menuController.create = async (req,res) => {
    await menuModel.create(req.body)
    res.json({
        message: "data berhasil di buat"
    })
}

menuController.getById = async (req,res) => {
    const id = req.params.id
    const data = await menuModel.getById(id);

    res.json({
        data
    })
}

menuController.updateData = async (req,res) => {
    const {id} = req.params
    const {item, price} = req.body; 
    await menuModel.update(id,item,price)

    res.json({
        message: `data dengan id ${id} berhasil di update`
    })
}

menuController.deleteData = async (req, res) => {
    const {id} = req.params
    await menuModel.delete(id);

    res.json({
        message: `data dengan id ${id} berhasil di hapus`,
        data
    })

}


module.exports = menuController