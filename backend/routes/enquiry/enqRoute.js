const express = require("express");
const router = express.Router();
const enqModel = require('../../models/enquiry/enquiryModel');

//send form to db
router.post('/send', async (req, res) => {
    const enqData = new enqModel({
        fullName: req.body.fullName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        message: req.body.message,

    })

    try {
        const sentData = await enqData.save();
        res.status(200).json(sentData);
    } catch (error) {
        res.send(error);

    }
});

// fetching all data from db

router.get('/all', async (req, res) => {
    try {
        const enquiries = await enqModel.find();
        res.status(200).json(enquiries);
    } catch (error) {
        res.status(500).json(error);
    }
})





module.exports = router;