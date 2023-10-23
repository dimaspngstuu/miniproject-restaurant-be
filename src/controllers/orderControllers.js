const orderModel = require("../models/orderModels");
const customerControllers = require("../controllers/customerController")

const orderControllers = {};

orderControllers.getAll = async (req, res) => {
    const data = await orderModel.getAllData()

    res.json({
        "Status": "SUCCESS",
        "data": data
    })
}


orderControllers.create = (req, res) => {
    const {customerId, items} = req.body;
    customerControllers.getById(customerId, (err, rows) => {
        if(err){
            return res.status(500).json({
                "Status" : "ERROR",
                "data" : err
            })
        }
    })

    const menuName = items.map((d) => d.menu );
    const mappedMenu = items.map((f) => ({
        menuName : f.menu.split(" ").join(""),
        qty: f.qty
    }))

    const groupByMenuName = mappedMenu.reduce((result, item) => {
        if (!result[item.menuName]) {
            result[item.menuName] = [];
        }
        result[item.menuName].push(item);
        return result;
    }, {});;


    const findMenu = customerControllers.getByName(menuName, (err,rows) => {
        if(err){
            res.status(500).json({
                status: "menu not found"
            })
        }
    })

    const menus = findMenu;
    for(let data of menus){
        const menuName = data.item.split(" ").join("")
        const insertOrder = {
            customerId : customerId,
            menuId : data.id,
            qty : groupByMenuName[menuName][0].qty
        }

        orderModel.create(insertOrder,(err,rows) => {
            if(err){
                console.log(err);
            }else {
                console.log(rows);
            }
        })
    }


    res.status(201).json({
        message : "Data Berhasil Ditambahkan !",
    })
}




module.exports = orderControllers











