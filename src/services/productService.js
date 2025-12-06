import fs from "fs";

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
    products.push(data)
    fs.writeFileSync("./src/data/products.json",JSON.stringify(products))

}


export default { getProducts,getProductsIndividually,createProduct}