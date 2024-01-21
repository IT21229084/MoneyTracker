import express from "express"
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
import Transcation from "./Models/Transcation.js";
dotenv.config()
const app = express()


app.use(cors()); // Enable CORS for all routes
app.use(express.json())
app.get('/get/test', (req, res) => {
    res.json("test ok")
});

app.post("/api/transcation", async (req, res) => {
    // console.log(process.env.MONGO)
    // await mongoose.connect("mongodb+srv://malithiroshan9:malith3541@moneytrackerdb.bhxehan.mongodb.net/?retryWrites=true&w=majority")
    console.log('Request Body:', req.body);
    await mongoose.connect(process.env.MONGO)
    const { Name, Description ,DateTime  } = req.body
    const transcation = await Transcation.create({ Name, Description ,DateTime  })
    res.json(transcation)
})


app.listen(8000, () => {
    console.log("connected to Backend.")
})