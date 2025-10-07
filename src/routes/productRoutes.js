import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("all products");
});

router.post("/", (req, res) => {
  res.send(" products posted sucessfully");
});

router.put("/", (req, res) => {
  res.send(" products updated sucessfully");
});

export default router;
