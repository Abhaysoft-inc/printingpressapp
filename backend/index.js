const express = require("express");
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth/authRoutes');
const enqrouter = require("./routes/enquiry/enqRoute");

mongoose.connect('mongodb://localhost:27017/printingpress');
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/enquiry', enqrouter);

app.listen(5050, () => {
    console.log('Hi');
})