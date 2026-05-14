import productService from "../services/productService.js";

const getproduct = async (req, res) => {
    const products = await productService.getProducts(req.query); // ✅ call function correctly
    res.status(200).json(products);                // ✅ return data, not function
}

const postRequest = async (req, res) => {
    try {
        const data = await productService.createProduct(req.body)
        res.status(201).json(data)

    } catch (error) {
        res.status(500).send(error.message)

    }
}

const putRequest = (req, res) => {
    res.send("sucessfully updated by put request")
}

const getProductById = async (req, res) => {
    const id = req.params.id;
    const individualData = await productService.getProductsIndividually(id)
    res.json(individualData)
}

const deleteProduct = (req, res) => {
    res.send("deleted  a product sucessfully")
}




export default { getproduct, postRequest, putRequest, getProductById, deleteProduct };