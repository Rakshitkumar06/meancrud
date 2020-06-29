// Database schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let product = new Schema(
    {
    title: { type: String },
    price: { type: Number },
    image: { type: String },
    company: { type: String },
    description: { type: String },
},
{
    collection:"product",
}
);

module.exports = mongoose.model("ProductModel", product);