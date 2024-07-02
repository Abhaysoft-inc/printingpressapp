const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    fullName: {

        type: String,
    },
    phoneNumber: {

        type: Number,
    },
    email: {

        type: String,

    },
    address: {
        type: String,

    },
    password: {
        type: String,

    }

});

module.exports = mongoose.model('users', userSchema);