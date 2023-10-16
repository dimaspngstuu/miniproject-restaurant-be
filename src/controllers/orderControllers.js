const orderModel = require("../models/orderModels");

const orderControllers = {};

orderControllers.create = async function (req, res) {

    const { customer_id, items } = req.body;
    const orderDate = new Date().toISOString().split('T')[0];
    const totalOrder = items.reduce((acc, item) => acc + item.price * item.qty, 0);


    await orderModel.create(customer_id, items, orderDate, totalOrder);
    res.status(201).json({
        status: "OK",
        message: 'Data berhasil ditambahkan',
        orders: items,
        totalOrder,
        orderDate,
    });


}


module.exports = orderControllers











