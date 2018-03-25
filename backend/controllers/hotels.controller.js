var hotelsService = require('../services/hotels.service')

_this = this


exports.getHotels = async function(req, res, next){
    console.log("llego la peticios")
    try{
        var hotels = JSON.parse(await hotelsService.getHotels());
        return res.status(200).json({status: 200, data: hotels, message: "Succesfully Hotels Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getHotelsByFilter = async function(req, res, next){
    var filter = {
        name : req.body.name,
        stars : req.body.stars.replace("'", " ").split(" ")
    }
    console.log(filter.stars)
     try{
         var hotels = JSON.parse(await hotelsService.getHotelsByFilter(filter));
         return res.status(200).json({status: 200, data: hotels, message: "Succesfully Hotels Recieved"});
     }catch(e){
         return res.status(400).json({status: 400, message: e.message});
     }
}