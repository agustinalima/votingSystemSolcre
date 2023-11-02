const express = require("express");
const router = express.Router();


const mainController = require("../controllers/mainController");



router.get('/', mainController.index);

router.post('/', mainController.checkVoter);

router.get('/api/allCandidates', mainController.allCandidates);
router.get('/api/allVotes', mainController.allVotes);
router.get('/api/admin', mainController.admin);


module.exports = router;