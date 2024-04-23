const mongoose = require("mongoose");


const adminSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: mongoose.Types.ObjectId, // Use ObjectId as the default value for _id
    },
    name: {
        type : String,
        unique : true,
        
    },

    email : {
        type : String,
        required : true,
    },

    password: {
        type: String
    },
    phone: {
        type: Number
    },

    address: {
        type: String
    },


    
})


const Admin = mongoose.model("admin",adminSchema);


module.exports = Admin;