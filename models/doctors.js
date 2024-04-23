const mongoose = require("mongoose");


const doctorSchema = new mongoose.Schema({
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
    username: {
        type: String
    }
    ,
    password: {
        type: String
    },
    phone: {
        type: Number
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },

    address: {
        type: String
    },
    specialized: {
        type: String
    },


    
})


const Doctor = mongoose.model("doctor",doctorSchema);


module.exports = Doctor;