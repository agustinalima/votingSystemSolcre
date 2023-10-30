const express = require("express");
const router = express.Router();


const mainController = require("../controllers/mainController");



router.get('/', mainController.index);

// router.get('/login', guestMiddleware, mainController.login);
// router.post('/login', mainController.loginProcess);
// router.get('/logout', mainController.logout);
// router.get('/profile', authMiddleware, mainController.profile);


module.exports = router;