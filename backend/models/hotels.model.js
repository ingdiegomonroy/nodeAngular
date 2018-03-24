var fs = require('fs');
const util = require('util');

// Convert fs.readFile into Promise version of same    
const readFile = util.promisify(fs.readFile);
var data = [];

exports.getStuff = async function () {
    data = await readFile('data.json', 'utf8');
    return data;
}
exports.getStuffByFilter = async function (params) {
    var newData = JSON.parse(data);
    for(var i =0; i< newData.length; i++){
        if(newData[i].name === params)
            return JSON.stringify(newData[i].name);
    }
}