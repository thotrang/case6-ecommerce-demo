const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ItemOrderSchema = new Schema({
    productId : {
        type:Schema.Types.ObjectId,
        ref:'product',
        require:true
    },
    amount:{
        type: Number,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    status:{
        type: Boolean,
        default:false
    }
})

module.exports = mongoose.model('itemOrder', ItemOrderSchema);
