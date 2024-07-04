const mongoose = require('mongoose');

const enquiryModel = mongoose.Schema({

    fullName: {

        type: String,
    },
    phoneNumber: {
        required: true,
        type: Number,
    },
    email: {

        type: String,
    },
    message: {
        type: String,

    }

});

module.exports = mongoose.model('enquiries', enquiryModel);