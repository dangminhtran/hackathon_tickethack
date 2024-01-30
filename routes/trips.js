var express = require('express');
var router = express.Router();
const Trip = require('../models/trip');
const Cart = require('../models/cart');
const Booking = require('../models/booking');


// all trips
router.get('/', (req, res) => {
    Trip.find().then(trips => {
    res.json({ allTrips: trips })
    });
});

// Find trip given user input
router.get("/search", (req, res) => {
    Trip.find({ departure: req.body.departure, arrival: req.body.arrival, date: req.body.date, })
    .then(data => {
      if (data) {
        res.json({ result: true, trip: data });
      } else {
        res.json({ result: false, error: "Itinerary not found" });
      }
    });
  });

module.exports = router;