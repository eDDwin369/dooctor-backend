const sets=require('../models/phySchema')





exports.phyproducts = async (req, res) => {

  try {

    const phyproducts = await sets.find()
    res.status(200).json(phyproducts)

  } catch (error) {
    res.status(401).json(error)
  }



}

exports.phyView = async (req, res) => {
  let {id}=req.params
    try {
  
      const viewproducts = await sets.findOne({id})
      res.status(200).json(viewproducts)
  
    } catch (error) {
      res.status(401).json(error)
    }
  
  
  
  
  }
  