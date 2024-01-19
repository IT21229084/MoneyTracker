import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express()

app.get('/get/test', (req, res) => {
    res.json("test ok")
});

app.listen(8000, () => {
    console.log("connected to Backend.")
})