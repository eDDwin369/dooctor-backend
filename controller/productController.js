const products=require('../models/productSchema')





exports.getallproducts = async (req, res) => {

  try {

    const allproducts = await products.find()
    res.status(200).json(allproducts)

  } catch (error) {
    res.status(401).json(error)
  }



}

exports.viewproducts = async (req, res) => {
let {id}=req.params
  try {

    const viewproducts = await products.findOne({id})
    res.status(200).json(viewproducts)

  } catch (error) {
    res.status(401).json(error)
  }




}


