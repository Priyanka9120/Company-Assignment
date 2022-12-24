const express =require("express")
const router =express.Router();
let {createCustomer,getCustomer,deleteCustomer} =require("../controller/customerController")
let{postCard, getCard} =require("../controller/cardController")

//===============customer Api===============//
router.post("/createCustomer",createCustomer)
router.get("/getCustomer",getCustomer)
router.delete("/deleteCustomer",deleteCustomer)

//==============Card Api===================//
router.post("/createCustomer",postCard)
router.get("/getCustomer",getCard)



module.exports =router