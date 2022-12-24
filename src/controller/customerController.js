const customerModel = require("../models/customerModel.js")
const { isValidObjectIds, validPhone, isValid, isValidCustomerId,isValidDate,validName,validEmail } = require("../validation/validation")
const createCustomer = async function (req, res) {
    try {
        let data = req.body
        let { fName, lName, mobileNumber, emailID, customerID, DOB, address } = data

        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "body can't be empty" })
        //----------------------------------validation for fName---------------------------------------------//
        if (!fName) return res.status(400).send({ status: false, message: "fName is required" })
        if (!isValid(fName)) return res.status(400).send({status:false,message:"First name is not valid"})
        if (!validName(fName)) return res.status(400).send({ status: false, message: "fName is not in correct format" })

        //------------------------------------------validation for LName-------------------------------------//
        if (!lName) return res.status(400).send({ status: false, message: "fName is required" })
        if (!isValid(lName)) return res.status(400).send({status:false,message:"First name is not valid"})
        if (!validName(lName)) return res.status(400).send({ status: false, message: "last name is not in correct format" })

        //----------------------------------------validation for DOB------------------------------------//
        if (!DOB) return res.status(400).send({ status: false, message: "DOB is mandatory" })
        if (!isValidDate(DOB)) return res.status(400).send({ status: false, message: "please enter a valid DOB" })

        //-----------------------------------------vaidation for address-------------------------------------//
        if (!address) return res.status(400).status({ status: false, message: "please enter address" })

        //---------------------------------------validation dor phoneNumber-----------------------------//
        if (!mobileNumber) return res.status(400).send({ status: false, message: "mobileNumber is required" })
        if (!isValid(mobileNumber)) return res.status(400).send({status:false,message:"mobile number is not valid"})
        if (!validPhone(mobileNumber)) res.status(400).send({ status: false, message: "moblie number is not in correct format" })
        //----------------------------------------validation for emailId--------------------------------//
        if (!emailID) return res.status(400).send({ status: false, message: "emailId is required" })
        if (!isValid(emailID)) return res.status(400).send({status:false,message:"emailId is not valid"})
        if (!validEmail(emailID)) res.status(400).send({ status: false, message: "emailId is not in correct format" })
        //----------------------------------------validation for customerId----------------------------------//
        if (!customerID) return res.status(400).send({ status: false, message: "customerId is required" })
        if (!isValid(customerID)) return res.status(400).send({status:false,message:"customerId is not valid"})
        if (!isValidCustomerId(customerID)) res.status(400).send({ status: false, message: "customerId is not in correct format" })


        //----------------------------------data created--------------------------------------------------------//
        let createData = await customerModel.create(data)
        return res.status(201).send({ status: true, message: "data Created", data: createData })
    }

    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}
const getCustomer = async function (req, res) {
    try {
        
        const customer=await customerModel.find({status:"ACTIVE"}) 
         return res.status(200).send({status:true,message:customer})
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const deleteCustomer = async function (req, res) {
    try {
        const customerId = req.params.customerID

        if (!isValidObjectIds(customerId)) return res.status(400).send({ status: false, message: "customerID is not valid" })
        let findCustomer= await customerModel.findOne({_id:customerId,status:"ACTIVE" })
       if(!findCustomer){return res.status(404).send({status:false,message:"customer not found"})}

        await customerModel.findOneAndUpdate({_id:customerId},{status:"INACTIVE"})
       return res.status(200).send({status:false,message:"deleted Succesfully"})
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = { createCustomer, getCustomer, deleteCustomer }