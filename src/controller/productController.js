import productService from "../services/productService.js";

const getproduct = (req, res) => {
    const products = productService.getProducts(); // ✅ call function correctly
    res.status(200).json(products);                // ✅ return data, not function
}

const postRequest = (req, res) => {
    res.send("sucessfully product creates by post request")
}

const putRequest = (req, res) => {
    res.send("sucessfully updated by put request")
}

const getProductById = (req, res) => {
    const id = req.params.id;
    const individualData = productService.getProductsIndividually(id)
    res.json(individualData)
}

const deleteProduct = (req, res) => {
    res.send("deleted  a product sucessfully")
}




export default { getproduct, postRequest, putRequest, getProductById, deleteProduct };