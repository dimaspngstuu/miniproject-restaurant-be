const customerModel = require("../models/customerModel");


const customerControllers = {};

customerControllers.getAll = async (req, res) => {
    const data = await customerModel.getAll();
    res.json({
        data
    })
}

 
customerControllers.create = async (req, res) => {
    const {name, address, email} = req.body;

    await customerModel.create(name,address,email);

    res.json({
        message: "data berhasil di masukan"
    })
}

customerControllers.getById = async (req, res) => {
    const {id} = req.params;
    const data = await customerModel.getById(id);
    res.json({
        message: `ini adalah data dengan id ${id}`,
        data
    })
}

customerControllers.update = async (req, res) => {
    const {id} = req.params;
    const {name, address, email} = req.body;

    await customerModel.updateById(name, address, email, id);

    res.json({
        message: "customer berhasil di update"
    })
}


customerControllers.delete = async (req, res) => {
    const {id} = req.params;

    await customerModel.deleteById(id);

    res.json({
        message: `customer dengan id ${id} telah di hapus`
    })
}

customerControllers.clearAllData = async (req, res) => {
    await  customerModel.clearAllDataTable()
    res.json({
        message: "semua data berhasil di hapus"
    })
}




module.exports = customerControllers