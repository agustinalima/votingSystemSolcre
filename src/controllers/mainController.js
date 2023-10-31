const fs = require("fs");
const path = require("path");


let mainController = {
  index: function (req, res){
    res.send('Hola, esta funcionando');
  }
};

module.exports = mainController;
