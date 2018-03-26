var hotelsService = require('../services/hotels.service')

_this = this


exports.getHotels = async function(req, res, next){
    try{
        var hotels = JSON.parse(await hotelsService.getHotels());
        return res.status(200).json({status: 200, data: hotels, message: "Succesfully Hotels Recieved"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.getHotelsByFilter = async function(req, res, next){
    var filter = req.body;
    console.log(JSON.stringify(filter));
       try{
           var hotels =JSON.parse(await hotelsService.getHotelsByFilter(filter));
           return res.status(200).json({status: 200, data: hotels, message: "Succesfully Hotels Recieved"});
       }catch(e){
           return res.status(400).json({status: 400, message: e.message});
       }
}