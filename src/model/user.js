
const { Schema} = require("mongoose");
const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxLenght:[10,'please enter name description ']

    },
    role:{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true,
        maxLenght:[10,'please enter phone description ']

    },
    userName: {
        type: String,
        require: true,
        maxLenght:[10,'please enter username description ']

    },
    gender:{
        type: String,
        require: true
    },
    dob: {
        type: String,
        require: true
    },
    avatar: String,
    address:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true,
        maxLenght:[10,'please enter password description ']
    },
    cardId: {
        type:Schema.Types.ObjectId,
        ref:'Cart',
        require: true
    }

})
module.exports = mongoose.model('User',UserSchema)