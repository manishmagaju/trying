import fs from "fs";

const getproduct = (req, res) => {
    const rawData = fs.readFileSync("./src/data/products.json", "utf8");
    const products = JSON.parse(rawData);
 
    res.status(200).json(products);

}

export default {getproduct};