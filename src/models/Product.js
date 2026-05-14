import mongoose from "mongoose";

//schema making for product
const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    category: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }

})

//applying model for  productSchema
const model = mongoose.model("product", productSchema)

export default model;
