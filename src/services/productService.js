import fs from "fs";
import product from "../models/Product.js"

const rawData = fs.readFileSync("./src/data/products.json", "utf8");
const products = JSON.parse(rawData);

const getProducts = (query) => {

    const filteredProducts = products.filter((product) => product.title == query.title)
    return filteredProducts;
}

const getProductsIndividually = (id) => {

    const findedProducts = products.find((products) =>  products.id == id )
    return findedProducts;
}

const createProduct =(data)=>{
    product.create(data)
  

}


export default { getProducts,getProductsIndividually,createProduct}