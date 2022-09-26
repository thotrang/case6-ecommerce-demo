const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

connectDB();

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});