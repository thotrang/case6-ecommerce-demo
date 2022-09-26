const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json());

const connectDatabase = () => {
    mongoose.connect('mongodb+srv://admin:admin123@cluster0.qkyelvk.mongodb.net/case6-ecommerce-demo')
    .then((data)=>{
        console.log('db connect success');
    }).catch((err)=>{
        console.log(err);
    })
}
connectDatabase();
server.listen('3001', () => {
    console.log('http://localhost:3001')
})