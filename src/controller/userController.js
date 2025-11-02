import userService from "../services/userService.js";


const productController = (req,res)=>{
    const users = userService.userservice();
    res.status(200).json(users)
}

export default {productController};