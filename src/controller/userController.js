import userService from "../services/userService.js";


const productController = (req, res) => {
    const users = userService.userservice();
    res.status(200).json(users)
}

const getUserById = (req,res)=> {
    const id = req.params.user
    res.send(`the user name is:${id}`)
}

export default { productController, getUserById };