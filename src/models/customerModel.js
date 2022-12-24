const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    DOB: {
        type: date()
    },
    emailID: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    customerID: {
        type: String,
        unique: true,
        required: True
    },
    status: {
        typr: String
    }



}, { timestamps: true });

module.exports = mongoose.model('customer', customerSchema)



