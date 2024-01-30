var express = require('express');
var router = express.Router();
const Trip = require('../models/trip');
const Arrival = require('../models/arrival');
const Departure = require('../models/departure');

/* POST test db */
router.post('/trip', (req, res) => {
  const newTrip = new Trip ({
    departure: req.body.departure,
    arrival: req.body.arrival,
  });
  newTrip.save().then(() =>
    Trip.find().then(data => {
      res.json({ allTrips: data });
    }));
  });


module.exports = router;
