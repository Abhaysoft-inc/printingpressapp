const express = require("express");
const mongoose = require('mongoose');

const bodyParser = require("body-parser")
const cors = require('cors')



const authRoutes = require('./routes/auth/authRoutes');
const enqrouter = require("./routes/enquiry/enqRoute");

mongoose.connect('mongodb+srv://abhay:6nckWmk8r6ZPTcDB@cluster0.mravslj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/auth', authRoutes);
app.use('/enquiry', enqrouter);

app.listen(5050, () => {
    console.log('Hi 5050');
})