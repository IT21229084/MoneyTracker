import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
const app = express()

app.use(cors())
app.use(express.json())
app.get('/get/test', (req, res) => {
    res.json("test ok")
});

app.post("/api/transcation",(req,res) =>{
    res.json(req.body)
})


app.listen(8000, () => {
    console.log("connected to Backend.")
})