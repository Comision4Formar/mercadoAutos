const express = require('express');
const router = express.Router();

const {index} = require('../controllers/adminController');

router.get('/',index)

module.exports = router;