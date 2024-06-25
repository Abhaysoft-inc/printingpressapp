const express = require("express");
const userModel = require('../../models/users/userModel');
const router = express.Router();


//signup
router.post('/signup', async (req, res) => {
    const userdata = new userModel({
        fullName: req.body.fullName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        address: req.body.address,
    })
    try {
        const userDataToSave = await userdata.save();
        res.status(200).json(userDataToSave);
    } catch (error) {
        res.send(error)

    }
});

//login
router.post('/login', (req, res) => {
    res.send('login');
});

//users
router.get('/user', async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json(error);

    }
});

// selecting user
router.get('/user/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        // Query to find a user by ID
        const user = await userModel.findById(userId);

        // Check if user with the given ID exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Send the user as JSON response
        res.status(200).json(user);
    } catch (error) {
        // Handle any errors that occur during the query
        res.status(500).json({ message: error.message });
    }
});




module.exports = router;