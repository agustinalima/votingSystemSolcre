const fs = require("fs");
const path = require("path");
let db = require("../database/models");


let mainController = {
  index: function (req, res){
    res.send('Hola, esta funcionando');
  },
  
  
  // APIs //
  allCandidates: (req, res) => {
    db.Voter.findAll()
      .then((voters) => {
        return res.json({ 
          total: voters.length,
          data: voters,
          status: 200
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
      });
  },

  allVotes: (req, res) => {
    db.Vote.findAll()
      .then((votes) => {
        return res.json({ 
          total: votes.length,
          data: votes,
          status: 200
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
      });
  },
}





module.exports = mainController;
