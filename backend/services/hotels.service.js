var hotels = require('../models/hotels.model')
var jsonQuery = require('json-query');
_this = this

var dataH = [];
exports.getHotels = async function () {
    await hotels.getStuff().then(data => {
        dataH = data;
    });
    return dataH;
}

exports.getHotelsByFilter = async function (params) {
    var newData = JSON.parse(dataH);
    var response = [];
    var stars = [];
    // Get star or request
    if( params.stars.length > 0){
        for(var i = 0; i < params.stars.length; i++ ){
            stars.push(params.stars[i]);
        }
    } 
    for (var i = 0; i < newData.length; i++) {
        var x = stars.indexOf(newData[i].stars)
        if (newData[i].name === params.name || x >= 0) {
            response.push(newData[i]);
        }
    }

    return JSON.stringify(response);
}
