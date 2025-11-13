import fs from "fs";

const rawData = fs.readFileSync("./src/data/products.json", "utf8");
const products = JSON.parse(rawData);

const getProducts = () => {

    const filteredProducts = products.filter((product) => product.price > 800)
    return filteredProducts;
}

const getProductsIndividually = (id) => {

    const findedProducts = products.find((products) =>  products.id == id )
    return findedProducts;
}


export default { getProducts,getProductsIndividually}