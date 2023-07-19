//import mongoose
const mongoose = require('mongoose')

//define schema
const phySchema = mongoose.Schema({





    id: {
        type: Number,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    experience: {
        type: String,
        required: true

    },


    image: {
        type: String,
        required: true
    },

    qualification: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    }, 
    name:{
        type :String ,
    }


   











})
//create model for collection
const sets = mongoose.model("sets", phySchema)

//exports the model
module.exports = sets