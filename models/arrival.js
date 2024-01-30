const mongoose = require('mongoose');

const arrivalSchema = mongoose.Schema({
	city: String,
	date: Date,
	price: Number,
});

const Arrival = mongoose.model('arrivals', arrivalSchema);

module.exports = Arrival;