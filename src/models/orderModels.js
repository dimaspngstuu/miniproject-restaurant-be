const db = require("../../db/config")


const orderModels = {};


orderModels.create = (customer_id, menu_id, qty) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO orders(customer_id, menu_id, qty) VALUES(?,?,?)";
        db.run(query,[customer_id, menu_id, qty], (err, rows) => {
            if(err){
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}


module.exports = orderModels

 