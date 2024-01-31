var express = require('express');
var router = express.Router();
const Trip = require('../models/trip');

// All trips
router.get('/', (req, res) => {
    Trip.find().then(trips => {
    res.json({ allTrips: trips })
    });
});

// Find trip given user input
router.get("/", (req, res) => {
    Trip.find({ departure: req.body.departure, arrival: req.body.arrival, date: req.body.date, })
    .then(data => {
      if (data) {
        res.json({ result: true, trips: data });
      } else {
        res.json({ result: false, error: "Itinerary not found" });
      }
    });
  });

module.exports = router;