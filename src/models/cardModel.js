const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const cardSchema = new mongoose.Schema({
    cardNumber: {
        type: String,
        required: true,
    },
    cardType: {
        type: String,
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default:ACTIVE
    },
    customerID: {
        
        type: ObjectId,
        ref: 'customerID',
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('card', cardSchema)
