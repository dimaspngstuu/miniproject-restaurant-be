const db = require("../../db/config")


const customerModel = {};

customerModel.getAll = () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM customer";
        db.all(query, (err, rows) => {
            if(err){
                reject(err)
            } else {
                resolve(rows)
            }
        })

    })
}

customerModel.getById = (id) => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM customer WHERE id = ?";
        db.get(query,[id], (err, rows) => {
            if(err){
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}


customerModel.getByName = (name) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM customer WHERE name LIKE '%${name}%'`;
        db.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

customerModel.create = (name, address, email) => {
    return new Promise((resolve, reject) => {
        const query = "INSERT INTO customer(name, address, email) VALUES (?,?,?)";
        db.run(query, [name, address, email], (err, rows) => {
            if(err){
                reject(err)
            } else {
                resolve (rows)
            }
        })
    })
}

customerModel.updateById = (name, address, email, id) => {
    return new Promise((resolve, reject) => {
        const query = "UPDATE customer SET name=?,address=? ,email=?  where id =? ";
        db.run(query,[name, address, email, id], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
    });
}

customerModel.deleteById = (id) => {
    return new Promise((resolve, reject) => {
        const query = "DELETE FROM customer WHERE id = ?";
        db.run(query,[id], (err,rows) => {
            if(err){
                reject(err)
            } else {
                resolve(rows)
            }
        })
    })
}

customerModel.clearAllDataTable = () => {
   return new Promise((resolve, reject) => {
    const query = "DELETE FROM customer";
    db.run(query,(err) => {
        if(err){
            reject(err)
        }else {
            const queryResetID = "UPDATE sqlite_sequence SET seq = 0 WHERE name = 'customer'";
            db.run(queryResetID, (err)=> {
                if(err){
                    reject(err)
                } else {
                    resolve("data berhasil di hapus, dan ID berhasil direset")
                }
            })
        }
    })
   })
}


module.exports = customerModel;