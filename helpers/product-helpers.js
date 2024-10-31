const db = require('../config/connection');
const state = db.get();

module.exports = {
    addProduct: (product, callback) => {
        const dbs = state;
        dbs.collection('product').insertOne(product).then((data) => {
            callback(true);
            console.log("Product added successfully");
        }).catch((err) => {
            console.error("Error adding product:", err);
            callback(false);
        });
    }
};
