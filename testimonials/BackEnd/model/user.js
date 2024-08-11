import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    job:String,
    image:String,
    text:String
})