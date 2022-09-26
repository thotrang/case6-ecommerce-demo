const { Schema } = require("mongoose");

const UserSchema = new Schema({
    name: String,
    role:String,
    email: String,
    phone: String,
    userName: String,
    gender:String,
    dob: String,
    avatar: String,
    address:String,
    password:String,
    // cardId: {
    //     type:Type
    //     ref:'Card'
    // }

})