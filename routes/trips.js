var express = require('express');
var router = express.Router();
const Trip = require('../models/trip');

router.get('/trips', (req, res) => 
  Trip.find().then(trips => {
  res.json({ allTrips: trips });
}));

module.exports = router;