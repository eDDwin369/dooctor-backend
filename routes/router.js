const express=require('express')
const router=new express.Router()
const userController=require('../controller/userController')
const productController=require('../controller/productController')
const phyController=require('../controller/phyController')
const paediaController=require('../controller/paediaController')
const reccomController =require('../controller/reccomController')
const bookingController=require('../controller/bookingController')





router.post('/dooctor/register',userController.register)

router.post('/dooctor/login',userController.login)

router.get('/dooctor/list',productController.getallproducts)


router.get('/dooctor/sets',phyController.phyproducts)

router.get('/dooctor/paedias',paediaController.paediaList)

router.get('/dooctor/reccoms',reccomController.reccomList)

router.get('/dooctor/view/:id',productController.viewproducts)

router.get('/dooctor/view1/:id',phyController.phyView)

router.get('/dooctor/view2/:id',paediaController.paediaView)

router.get('/dooctor/view3/:id',reccomController.reccoView)

router.post('/dooctor/book',bookingController.booking)



router.get('/dooctor/allbooking',bookingController.allbookings)



router.delete('/dooctor/remove/:id',bookingController.removeItem)





module.exports=router