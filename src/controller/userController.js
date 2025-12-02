import userService from "../services/userService.js";


const productController = (req, res) => {
    const users = userService.userservice();
    res.status(200).json(users)
}

const getUserById = (req,res)=> {
    const id = req.params.user
    const individualData = userService.getUserIndividually(id)
    res.json(individualData)
}

export default { productController, getUserById };