const mongoose = require('mongoose')
const {model} = require("mongoose");
const Schema = mongoose.Schema

const StoreSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : ' user',
        require : true
    },
    name : {
        type : String,
        require: true
    },
    image : [
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

    productsId : [{
        type: Schema.Types.ObjectId,
        ref :'Product'
    }],
    categoryId :[ {
        type: Schema.Types.ObjectId,
        ref : 'Category'
    }],
    date : {
        type : Date,
        default: Date.now
    },
    rating : {
        type : Number,
        default : 0
    }

})
module.exports = mongoose.model('Store',StoreSchema)




