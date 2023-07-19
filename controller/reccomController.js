const reccoms=require('../models/reccomSchema')





exports.reccomList = async (req, res) => {

  try {

    const reccomList = await reccoms.find()
    res.status(200).json(reccomList)

  } catch (error) {
    res.status(401).json(error)
  }



}

exports.reccoView = async (req, res) => {
  let {id}=req.params
    try {
  
      const viewproducts = await reccoms.findOne({id})
      res.status(200).json(viewproducts)
  
    } catch (error) {
      res.status(401).json(error)
    }
  
  
  
  
  }

