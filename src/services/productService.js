import fs from "fs";
import product from "../models/Product.js"



const getProducts = async (query) => {
    const mongodbProducts = await  product.find()
    return mongodbProducts;
}

const getProductsIndividually = async (id) => {
    const findedProducts = await product.findById(id)
    return findedProducts;
}

const createProduct = async (data) => {
    const createdProduct = await product.create(data)
    return createdProduct;
}


export default { getProducts, getProductsIndividually, createProduct }