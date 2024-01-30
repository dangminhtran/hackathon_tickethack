var express = require('express');
var router = express.Router();
const Trip = require('../models/trip');

/* POST test db
router.post('/trip', (req, res) => {
  const newTrip = new Trip ({
    departure: req.body.departure,
    arrival: req.body.arrival,
    date: req.body.date,
    price: req.body.price,
  });
  newTrip.save().then(() =>
    Trip.find().then(data => {
      res.json({ allTrips: data });
    }));
  });
*/


module.exports = router;
