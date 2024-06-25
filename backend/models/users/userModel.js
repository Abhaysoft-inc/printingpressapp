const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

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
    address: {
        type: String,
        required: false
    }

});

module.exports = mongoose.model('users', userSchema);