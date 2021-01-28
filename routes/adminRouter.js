const express = require('express');
const router = express.Router();

const {index, carsList, carsCreate, carsEdit, carsStore, carsDelete, carsUpdate, register, processRegister, login, processLogin} = require('../controllers/adminController');

router.get('/',index);

//entidad administradores

router.get('/register',register);
router.post('/register',processRegister);

router.get('/login',login);
router.post('/login',processLogin);


//entidad autos
router.get('/autos/list',carsList);

router.get('/autos/create',carsCreate);
router.post('/autos/store',carsStore);

router.get('/autos/edit/:id',carsEdit);
router.put('/autos/update/:id',carsUpdate);

router.delete('/autos/delete/:id',carsDelete);


module.exports = router;