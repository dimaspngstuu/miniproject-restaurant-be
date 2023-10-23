const menuModel = require("../models/menuModel")

const menuController = {}

menuController.getAll = async (req,res) => {
    const menus = await menuModel.getAll()
    res.json({ 
        message : menus
    })
}

menuController.create = async (req,res) => {
    const {item, price} = req.body

    if (!item || !price) {
        return res.status(400).json({
            status: "Item dan price harus diisi"
        });
    }

    if (typeof item !== "string" || typeof price !== "number") {
        return res.status(400).json({
            status: "Item harus berbentuk string dan price harus berbentuk angka"
        });
    }

    try {
        await menuModel.create(item, price);
        res.json({
            message: "Data berhasil dibuat"
        });
    } catch (error) {
        res.status(500).json({
            status: "Terjadi kesalahan dalam membuat data",
            error: error.message
        });
    }
    
   
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

    if(typeof item !== "string" || typeof price !== "number"){
        return res.status(404).json({
            status:"Item harus berupa string dan Price harus berupa number"
        })
    }

    try{
        await menuModel.update(id,item,price)
        res.json({
            message: `data dengan id ${id} berhasil di update`
        })
    }catch(err){
        res.status(500).json({
            status: "Terjadi kesalahan dalam mengupdate",
            error: err.message
        });
    }

    
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