import fs from "fs";

const getProducts = ()=> {
    const rawData = fs.readFileSync("./src/data/products.json", "utf8");
    const products = JSON.parse(rawData);
    return products;
}

export default {getProducts}