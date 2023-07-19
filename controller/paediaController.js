const paedias=require('../models/paediaSchema')





exports.paediaList = async (req, res) => {

  try {

    const paediaList = await paedias.find()
    res.status(200).json(paediaList)

  } catch (error) {
    res.status(401).json(error)
  }



}

exports.paediaView = async (req, res) => {
  let {id}=req.params
    try {
  
      const viewproducts = await paedias.findOne({id})
      res.status(200).json(viewproducts)
  
    } catch (error) {
      res.status(401).json(error)
    }
  
  
  
  
  }