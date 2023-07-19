const bookings=require('../models/bookingSchema')




exports.booking=async (req,res)=>{
    const {id,name,image,qualification,price}=req.body
    try {
        const item=await bookings.findOne({id})
        if(item){
            res.status(406).json("Already Booked")
        }else{
            const newItem=new bookings({id,name,image,qualification})
            await newItem.save() 
            res.status(200).json(newItem)
        }



        
    } catch (error) {
        
    }






}


exports.allbookings=async(req,res)=>{

try {

    const allbookings=await bookings.find()
    res.status(200).json(allbookings)
    
} catch (error) {
    
}


}

exports.removeItem = async (req, res) => {

    const {id} = req.params
    try {
        await bookings.deleteOne({id})
        const allItems = await bookings.find()
        res.status(200).json(allItems)

    }
    catch (error) {
        res.status(401).json(error)

    }




}
