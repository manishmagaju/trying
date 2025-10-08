import express from "express"

const router = express.Router();

router.get("/", (req, res) => {
    res.send("my name is manish and sucessfully make user routes");
});

export default router;