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


    if(!name || !address || !email){
        res.status(400).json({
            status: "name, addres dan email harus di isi"
        })
    }

    if(typeof name !== "string" || typeof email !== "string"){
        res.status(400).json({
            status: "name dan email harus di isi dengan huruf"
        })
    }
    
    try {
        await customerModel.create(name,address,email);
        res.json({
            message: "data berhasil di masukan"
        })
    } catch (error) {
        res.status(500).json({
            status: err.message
        })
    }

    
}

customerControllers.getById = async (req, res) => {
    const {id} = req.params;
    const data = await customerModel.getById(id, (err,rows) => {
        if(err){
            throw err
        }else {
            res.json({
            message: `ini adalah data dengan id ${id}`,
            data})
        }
    });
    

}

customerControllers.update = async (req, res) => {
    const {id} = req.params;
    const {name, address, email} = req.body;

    if(typeof name !== "string" || typeof email !== "string"){
        res.status(400).status({
            status: "name dan email harus berupa huruf"
        })
    }

    try {
        await customerModel.updateById(name, address, email, id);
        res.json({
            message: "customer berhasil di update"
        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }

    
}

customerControllers.getByName = async (req, res) => {
    const {name} = req.body;
    const data = await customerModel.getByName(name)
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