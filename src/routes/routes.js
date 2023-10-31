const express = require("express");
const router = express.Router();


const mainController = require("../controllers/mainController");



router.get('/', mainController.index);

router.get('/api/allCandidates', mainController.allCandidates);
router.get('/api/allVotes', mainController.allVotes);


module.exports = router;