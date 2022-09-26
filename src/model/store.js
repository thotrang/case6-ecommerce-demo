const mongoose = require('mongoose')
const {model} = require("mongoose");
const Schema = mongoose.Schema

const StoreSchema = new Schema({
    UserId : {
        type : Schema.Types.ObjectId,
        ref : ' user',
        require : true
    },
    Name : {
        type : String,
        require: true
    },
    Image : [
        {
            public_id : {
                type : String,
                require : true
            },
            url : {
                type : String,
                require : true
            }
        }
    ],

    ProductsId : {
        type: Schema.Types.ObjectId,
        ref :'product'
    },
    CategoryId : {
        type: Schema.Types.ObjectId,
        ref : 'category'
    },
    Date : {
        type : Date,
        default: Date.now
    },
    Rating : {
        type : Number,
        default : 0
    }

})
module.exports = mongoose.model('store',StoreSchema)




