var express = require('express');
var router = express.Router();
const Trip = require('../models/trip');
const moment = require('moment'); 

// All trips
/*router.get('/', (req, res) => {
    Trip.find().then(trips => {
    res.json({ allTrips: trips })
    });
});*/

// Find trip given user input
router.get("/", (req, res) => {
    const {departure, arrival, date} = req.query;
    const dateStart = moment(date).startOf('day');
    const dateEnd = moment(date).endOf('day');

    Trip.find({ 
        departure: {$regex: new RegExp(departure, "i") }, 
        arrival: {$regex: new RegExp(arrival, "i") }, 
        date: {$gte: dateStart, $lte: dateEnd}, 
        })
    .then(data => {
      if (data) {
        res.json({ result: true, trips: data });
      } else {
        res.json({ result: false, error: "Itinerary not found" });
      }
    });
  });

module.exports = router;