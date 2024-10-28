const mongoose = require('mongoose');

const McuSchema = new mongoose.Schema({
    debutYear: Number,
    debutFilm: String,
    name: {
        type: String,
        unique: true,
        required: true,
    }
})

// makes a model for affecting the 'mcus' collecton in our database
const Mcu = mongoose.model('Mcu', McuSchema);

// together with the .env name, we have the database and collection of:
// database: fullstack-db
// collection: mcus
module.exports = Mcu;