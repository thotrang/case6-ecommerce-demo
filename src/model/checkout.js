const mongoose = require('mongoose')
const {Schema} = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
    cartId:{
        type: Schema.Types.ObjectId,
        ref: 'Checkout',
        require: true
    },
    total:{
        type: Number,
        require: true
    },
    paymentMethod: String,
    shipingMethod: String
})

module.exports = mongoose.model('Checkout', CheckoutSchema)