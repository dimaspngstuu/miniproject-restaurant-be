const db = require("../../db/config")


const orderModels = {};


orderModels.create = (customer_id,items,orderDate,totalOrder) => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            db.run("BEGIN TRANSACTION");
            const query ="INSERT INTO orders (customer_id, menu_id, qty, order_date) VALUES (?, ?, ?, ?)";
            db.run(query,[customer_id, items.menu_id, items.qty, orderDate] )
            
        })
    })
}


module.exports = orderModels

 