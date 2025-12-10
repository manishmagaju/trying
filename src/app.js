import express from "express";
import bodyParser from "body-parser";

//imported links
import config from "./config/config.js"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import todosRoutes from "./routes/todosRoutes.js";
import connectDB from "./config/database.js"

//express initialization
const app = express();

//conecting database
connectDB()

//middleware
app.use(bodyParser.json())

//defaut text for homepage
app.get("/", (req, res) => {
    res.json({
        name: config.name,
        port: config.port,
        verion: config.version
    })
})


//routes
app.use("/products", productRoutes)
app.use("/user", userRoutes)
app.use("/todos", todosRoutes)

//server start
app.listen(config.port, () => {
    console.log("port running at 5000........")
});














//another route with json output
// app.get("/product", (req, res) => {
//     const products = fs.readFileSync("./src/data/products.json", "utf8")
//     const jsonobj = JSON.parse(products)
//     res.status(200).json(jsonobj)
// });

// //404 page
// app.use((req, res) => {
//     res.status(404).send("page not found gwach")

// })

// //postmethod
// app.post("/product", (req, res) => {
//     res.status(200).send("sucessfull post")
// })

// app.put("/product", (req, res) => {
//     res.status(200).send("sucessfull updated")
// })