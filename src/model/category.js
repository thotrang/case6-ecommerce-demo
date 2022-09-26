const mongoose = require ("mongoose");
const catgorySchema = mongoose.Schema({
    name:{
        type : String,
        required : true,
        unique : true
    },
    image:{
        type : String,
        required : true
    },
    product :{
        type : Schema.Type.ObjectId,
        ref : "products"
    }
})