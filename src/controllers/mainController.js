const {getIndex} = require('../services/mainService');


let mainController = {
  index: function (req, res){
    getIndex(req,res);
  }
};

module.exports = mainController;
