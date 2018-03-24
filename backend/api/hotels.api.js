var express = require('express')

var router = express.Router()

var hotelsController = require('../controllers/hotels.controller');

router.get('/', hotelsController.getHotels)
router.post('/', hotelsController.getHotelsByFilter)

module.exports = router;