var express = require('express');
var router = express.Router();
const Booking = require('../models/booking');
const Cart = require('../models/cart')

// Add booking


router.post('/', (req, res) => {
    Cart.find().then(data => {
        for (let i=0; i < data.length; i++) {
            
                const newBooking = new Booking({trips: data[i].trip})
                newBooking.save()
                
                

        } 
        Booking.find().then(data => {
            res.json({result: true, trips: data})
        })
    })
});


// Show bookings

router.get('/', (req, res) => {
    Booking.find().populate('trip').then(data => {
        if(!data) {
            res.json({result: false});
        }
        res.json({ result: true, Booking: data });
    });
});

module.exports = router;