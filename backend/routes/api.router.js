var express = require('express')

var router = express.Router()
var hotels = require('../api/hotels.api')


router.use('/hotels', hotels);


module.exports = router;