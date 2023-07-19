require('dotenv').config()
const express=require('express')
const cors=require('cors')
require('.//DB/connection')
const router=require('./routes/router')

const server=express() 




server.use(cors())
server.use(express.json())
server.use(router)


const  PORT=process.env.PORT||3000


server.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})


server.get('/',(req,res)=>{
    res.status(200).json("back-end started")
})

