import express from "express";
import fs from "fs";
import config from "./config/config.js"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"

const app = express();

app.get("/", (req, res) => {
    res.json({
        name: config.name,
        port: config.port,
        verion: config.version
    })
})

app.use("/products",productRoutes)
app.use("/user",userRoutes)



app.listen(config.port, () => {
    console.log("port running at 5000........")
})














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