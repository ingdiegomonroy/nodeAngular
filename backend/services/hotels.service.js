var hotels = require('../models/hotels.model')

_this = this

var dataH = [];
exports.getHotels = async function(){
    await hotels.getStuff().then(data =>{
        dataH = data;
    });
    return dataH;
}

exports.getHotelsByFilter = async function(params){
    var newData = JSON.parse(dataH);
    var response = [];
    console.log(params.stars)
    for(var i = 0; i < newData.length; i++){
        if(newData[i].name === params.name || params.stars.indexOf(newData[i].stars) != -1 ){
            response.push(JSON.stringify(newData[i]));
        }
        return response;
    }
}
