const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({

    "email": {
        type: String,
        required: true
    },
    "password": {
        type:String,
        required:true
    }

})

module.exports = mongoose.model("user",userScheme)