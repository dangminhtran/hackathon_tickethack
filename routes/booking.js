var express = require('express');
var router = express.Router();
const Booking = require('../models/booking');


// Add booking

router.post('/', (req, res) => {
    Booking.findOne({ trips: req.body.id }).then(data => {
        if (data) {
            return false;
        }

        const newBooking = new Booking({trips: req.body.id})
        newBooking.save().then((data) => res.json({ tripAdded: data }))
        
        });
});

// Show bookings

router.get('/', (req, res) => {
    Booking.find().then(data => {
        if(!data) {
            res.json({result: false});
        }
        res.json({ result: true, Booking: data });
    });
});

module.exports = router;