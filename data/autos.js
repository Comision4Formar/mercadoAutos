const fs = require('fs');

module.exports = JSON.parse(fs.readFileSync(__dirname + '/autos.json','utf-8'));