const orderModel = require("../models/orderModels");

const orderControllers = {};

orderControllers.create = (req, res) => {
    const {customer_id, menu_id, qty} = req.body;

    const result = orderModel.create(customer_id, menu_id, qty);

    res.json({
        data: result
    })
}


module.exports = orderControllers