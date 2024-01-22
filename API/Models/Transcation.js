import { model, Schema } from "mongoose";
import mongoose from 'mongoose';
const TranscationShema = new Schema({
    Name: { type: String, required: true }, 
    Price:{type:Number,required:true},
    Description: { type: String,required: true },
    DateTime: { type: Date, required: true },
   

})

// export default TranscationModel = model("Transcation",TranscationShema)
export default mongoose.model("Transcation", TranscationShema)