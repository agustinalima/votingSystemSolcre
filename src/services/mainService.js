const fs = require("fs");
const path = require("path");


function getIndex(req, res) {
    res.send('Hola, esta funcionando');
}



module.exports = {getIndex}