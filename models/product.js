var mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    // give the values scema ie the types of feilds  it si not always required


    title: String,
    name: String,
    price: Number,
    description: String,
    imageUrl: String,
    Quantity: Number,
});
const productModel = mongoose.model('products', ProductSchema);
module.exports = productModel;