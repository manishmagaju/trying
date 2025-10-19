// import fs from "fs";
// import productService from "../services/productService.js";

// const getproduct = (req, res) => {
  
 
//     res.status(200).json(getProducts);

// }

// export default {getproduct};


import productService from "../services/productService.js";

const getproduct = (req, res) => {
    const products = productService.getProducts(); // ✅ call function correctly
    res.status(200).json(products);                // ✅ return data, not function
}

export default { getproduct };