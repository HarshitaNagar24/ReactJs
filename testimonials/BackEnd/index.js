import express from "express";
import dotEnv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotEnv.config();

const port = process.env.PORT || 3001;
const url = process.env.URL;

mongoose.connect(url,{}).then(()=>{
    console.log("Connected to MongoDB");
}) .catch((error)=>{
console.error('Error connecting to MongoDB:', error);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });