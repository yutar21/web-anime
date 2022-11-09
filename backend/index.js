const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log("CONNECTER TO MongoDB");
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.listen(8000 , ()=>{
    console.log("server is running");
})
