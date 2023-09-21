const mongoose = require('mongoose');

const climateSchema = new mongoose.Schema({
    climate: {
        type: String,
        enum: ['hot', 'humid', 'rainy', 'cold'],
        required: true,
    },
    areaCode: {
        type: Number,
        min: 100,
        max: 1000,
        required: true,
    },
    temperature: {
        type: Number,
        required: true,
    },
    humidity: {
        type: Number,
        required: true,
    },
    chancesOfRain: {
        type: Number,
        required: true,
    },
});

const Climate = mongoose.model('Climate', climateSchema);

module.exports = Climate;
