//import mongoose
const mongoose = require('mongoose')

//define schema
const paediaSchema = mongoose.Schema({





    id: {
        type: Number,
        required: true,
        unique: true
    },

    title: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true

    },


    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },


    rating: {

        rate: {
            type: Number,
            required: true

        },

        count: {
            type: Number,
            required: true
        }
    }











})
//create model for collection
const paedias = mongoose.model("paedias", paediaSchema)

//exports the model
module.exports = paedias