const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ItemOrderSchema = new Schema({
    productId : {
        type:Schema.Types.ObjectId,
        ref:'product',
        require:[true,'Must have media id from product to']
    },
    amount:{
        type: Number,
        require:[true,'quantity required']
    },
    price:{
        type: Number,
        require:[true,'required to enter the price']
    },
    status:{
        type: Boolean,
        default:false
    }
})

module.exports = mongoose.model('itemOrder', ItemOrderSchema);
