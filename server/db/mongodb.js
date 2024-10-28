const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connectToMongoDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('mongodb connected!!');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToMongoDB;