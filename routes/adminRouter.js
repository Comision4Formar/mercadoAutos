const express = require('express');
const router = express.Router();

const {index, carsList, carsCreate, carsEdit, carsStore, carsDelete, carsUpdate} = require('../controllers/adminController');

router.get('/',index);

router.get('/autos/list',carsList);

router.get('/autos/create',carsCreate);
router.post('/autos/store',carsStore);

router.get('/autos/edit/:id',carsEdit);
router.put('/autos/update/:id',carsUpdate);

router.delete('/autos/delete/:id',carsDelete);


module.exports = router;