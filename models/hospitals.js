const mongoose = require("mongoose");


const hospitalSchema = new mongoose.Schema({
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
    type: {
        type: String
    },
    license: {
        type: String
    },
    



    
})


const Hospital = mongoose.model("hospital",hospitalSchema);


module.exports = Hospital;