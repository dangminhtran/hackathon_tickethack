const mongoose = require('mongoose');

const departureSchema = mongoose.Schema({
	city: String,
	date: Date,
	price: Number,
});

const Departure = mongoose.model('departures', departureSchema);

module.exports = Departure;