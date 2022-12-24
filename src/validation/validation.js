const mongoose =require("mongoose")
const {isValidObjectId} = require("mongoose")
const moment =require("moment")


const isValid=function(value){
    if( typeof value=='undefined' || value==null) return false
    if( typeof value=='string' && value.trim().length===0) return false
    return true
}

//----------------------------------------------Validation for name-----------------------------------------------------------------------------

const validName=function(name){
    const nameRegex=/^[A-Z a-z]+$/
    return nameRegex.test(name)
}

//----------------------------------------------Validation for email-----------------------------------------------------------------------------

const validEmail=function(email){
    const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(email)
}

//----------------------------------------------Validation for phone-----------------------------------------------------------------------------

const validPhone=function(phone){
    const phoneRegex=/^[789]\d{9}$/
    return phoneRegex.test(phone)
}

//--------------------------------------------------validation for objectID---------------------------------------------------------------------------//
const  isValidObjectIds =function(id){
    const check = isValidObjectId(id);
    return check
}
//-------------------------------------------------validation for date--------------------------------------------------------------//
const isValidDate = function (date) {
    if (typeof date != "string") return false
    return moment(date, 'YYYY-MM-DD', true).isValid()}
//----------------------------------------------------validation for cardNumber------------------------------------------------------------//
 const isValidCardNumber= function(value){
        const regex=/(?:\d[ -]*?){13,16}/
        return regex.test(value)
      }
//--------------------------------------------------validation for cardId-------------------------------------------------------------------//
const isValidCustomerId = (String) => {
    const regexName=/^[a-zA-Z 0-9]+$/;
    return regexName.test(String)
  } 
module.exports ={isValid,validName,validEmail,validPhone,isValidObjectIds,isValidCardNumber,isValidCustomerId,isValidDate}

