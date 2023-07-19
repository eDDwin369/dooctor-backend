const users = require('../models/userSchema')



exports.register = async (req, res) => {
    console.log(req.body);
    const { email, username, password } = req.body
    if (!email || !username || !password) {
        res.status(403).json("all inputs required")
    }
    try {
        const preuser = await users.findOne({ email })
        if (preuser) {
            res.status(403).json("user already exist")
        } else {
            const newuser = new users({
                email,
                username,
                password
            })
            await newuser.save()
            res.status(200).json(newuser)

        }
    }
    catch (error) {
        res.status(401).json("error")
    }


}

exports.login=async (req,res)=>{
    const {email,password}=req.body
    try {

        const loginDetails=await users.findOne({email,password})
        if(loginDetails){

        res.status(200).json(loginDetails.username)
        }else{
            res.status(404).json("invalid email/password")
        }
        
    } catch (error) {
        res.status(401).json(error)
        
    }
}