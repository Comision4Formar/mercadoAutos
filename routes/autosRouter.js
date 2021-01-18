const express = require('express');
const router = express.Router();

const autosController = require('../controllers/autosController');

router.get('/',autosController.index);







module.exports = router;