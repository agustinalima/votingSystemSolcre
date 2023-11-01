const fs = require("fs");
const path = require("path");
let db = require("../database/models");

const express = require("express");
const app = express();

let mainController = {
  index: async function (req, res) {
    try {
      const candidates = await db.Voter.findAll({ where: { is_candidate: 1 } });
      return res.render("index", { candidates: candidates });
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error interno del servidor");
    }
  },

  // APIs //
  allCandidates: (req, res) => {
    db.Voter.findAll()
      .then((voters) => {
        return res.json({
          total: voters.length,
          data: voters,
          status: 200,
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Error interno del servidor" });
      });
  },

  checkVoter: async function (req, res) {
    try {
      const { document } = req.body;
      const user = await db.Voter.findOne({
        where: { document },
      });

      if (!user) {
        const candidates = await db.Voter.findAll({
          where: { is_candidate: 1 },
        });
        return res.render("index", {
          errors: {
            document: {
              msg: "Este documento no se encuentra en nuestra base de datos.",
            },
          },
          candidates: candidates,
        });
      }

      // Verificar si el usuario ya ha votado
      const existingVote = await db.Vote.findOne({
        where: { voter_id: user.id },
      });

      if (existingVote) {
        // Si el usuario ya ha votado, muestra un mensaje de error
        const candidates = await db.Voter.findAll({
          where: { is_candidate: 1 },
        });
        return res.render("index", {
          errors: {
            document: {
              msg: "Este usuario ya ha votado.",
            },
          },
          candidates: candidates,
        });
      }

      // Si el usuario existe, tengo su ID
      const voterId = user.id;
      console.log(voterId);

      await db.Vote.create({
        candidate_id: req.body.candidateId,
        voter_id: voterId,
        date: new Date(),
      });

      // Obtener la lista de candidatos nuevamente y pasarla a la vista
      const candidate = await db.Voter.findAll({ where: { is_candidate: 1 } });

      return res.render("index", { candidates: candidate });
    } catch (err) {
      console.error(err);
      return res.status(500).send("Error en el servidor");
    }
  },

  allVotes: (req, res) => {
    db.Vote.findAll()
      .then((votes) => {
        return res.json({
          total: votes.length,
          data: votes,
          status: 200,
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Error interno del servidor" });
      });
  },
};

module.exports = mainController;
