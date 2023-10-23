const db = require("../../db/config")


const orderModels = {};


orderModels.getAllData = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM orders JOIN menu ON menu.id = orders.menu_id JOIN customer ON customer.id = orders.customer_id";
        db.all(query, (err,rows) => {
            if(err){
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}


orderModels.create = (data) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO orders (customer_id,menu_id,qty) VALUES (?,?,?)`;
        const values = [data.customerId, data.menuId, data.qty];
        db.run(query,values, (err, rows) => {
            if(err){
                reject(err)
            } else{
                resolve(rows)
            }
        })
    })
}


orderModels.create = () => {
    
}


module.exports = orderModels

 