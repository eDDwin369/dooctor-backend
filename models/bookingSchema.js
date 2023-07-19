const mongoose=require('mongoose')
const bookingSchema=mongoose.Schema({


    id: {
        type: Number,
        required: true,
        unique: true
    },
    name:{
        type : String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true

    },
    
    id: {
        type: Number,
        required: true,
        unique: true
    }
})

const bookings = mongoose.model("bookings", bookingSchema)

//exports the model
module.exports = bookings

