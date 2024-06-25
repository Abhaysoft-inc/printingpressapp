const mongoose = require('mongoose');

const enquiryModel = mongoose.Schema({

    fullName: {
        required: true,
        type: String,
    },
    phoneNumber: {
        required: true,
        type: Number,
    },
    email: {
        required: true,
        type: String,
    },
    message: {
        type: String,
        required: false
    }

});

module.exports = mongoose.model('enquiries', enquiryModel);