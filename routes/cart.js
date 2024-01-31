var express = require('express');
var router = express.Router();
const Cart = require('../models/cart');

// Find trip added to cart
router.post('/', (req, res) => {
    Cart.findOne({ trip: req.body.id }).then(data => {
        if (data) {
            return false;
        }

        const newCartEntry = new Cart({trip: req.body.id})
        newCartEntry.save().then(() => res.json({ result: true, cartUpdated: data }));
        });
});

// Show trips in cart
router.get('/', (req, res) => {
    Cart.find().populate('trip').then(data => {
        if(!data) {
            res.json({result: false});
        }
        res.json({ result: true, Cart: data });
    });
});

// Delete one trip from cart
router.delete('/', (req,res) => {
    Cart.deleteOne({trip: req.body.id}).then(data => {
        if(data.deletedCount > 0) {
                Cart.find().then(data => {
                res.json({result: true, cartUpdated: data})
            });
        }
        res.json({result: false, error: 'Problem deleting trip from booking'})
    })
});

// Delete all trips from cart
router.delete('/', (req,res) => {
    Cart.deleteMany({}).then(() => {
        res.json({result: true});
    });
});

module.exports = router;