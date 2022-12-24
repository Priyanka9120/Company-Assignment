const cardModel =require("../models/cardModel")
const{isValidCardNumber,validName,isValidObjectIds} =require("../validation/validation")

const postCard =async function(req,res){
    try{
          let cardData =req.body
          if(Object.key(cardData).length==0) return res.status(400).send({status:false,message:"data can't be empty"})
          if(!isValidCardNumber(data.cardNumber)) return res.status(400).send({status:true,msg:"provide valid card number"})
          let presentCart=await cardModel.findOne({cardNumber:data.cardNumber,status:"ACTIVE"})
        if(presentCart)return res.status(400).send({status:false,msg:"this card no already exist"})
        if(cardData.cardType!=="REGULAR" || cardData.cardType=="SPECIAL"){
            return res.status(400).send({status:false,msg:"provide valid cardType info between REGULAR & SPECIAL"})}
        
    
    
            if(!validName(cardData.customerName)) return res.status(400).send({status:false,msg:"provide valid customerName"})
            if(cardData.status){
            if(cardData.status!=="ACTIVE" || cardData.status=="INACTIVE"){
                return res.status(400).send({status:false,msg:"provide valid status info"})}
                    }
             if(!isValidObjectIds(cardData.customerID)) return res.status(400).send({status:false,msg:"provide valid cutomerId"})
                    

          let createCard =await cardModel.create(cardData)
          return res.status(201).send({status:true,message:"data created",data:createCard})
    }
    catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
}

const getCard =async function (req,res){
    try{
         let fetchCard =await cardModel.find({status:"ACTIVE"}).populate("customerID")
         return res.status(201).send({status:true,message:"successful",data:fetchCard})
    }
    catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
}
      
        
module.exports={postCard, getCard}