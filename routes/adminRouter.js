const express = require('express');
const router = express.Router();
const upload = require('../middlewares/subidaImagenes');
const registerAdminValidator = require('../validations/registerAdminValidator');


const {index, carsList, carsCreate, carsEdit, carsStore, carsDelete, carsUpdate, register, processRegister, login, processLogin, listAdmins, profileAdmin} = require('../controllers/adminController');

router.get('/',index);

//entidad administradores

router.get('/register',register);
router.post('/register',registerAdminValidator, processRegister);

router.get('/login',login);
router.post('/login',processLogin);

router.get('/list',listAdmins);
router.get('/profile/:id',profileAdmin);


//entidad autos
router.get('/autos/list',carsList);

router.get('/autos/create', carsCreate);
router.post('/autos/store',upload.any(),carsStore);

router.get('/autos/edit/:id',carsEdit);
router.put('/autos/update/:id',carsUpdate);

router.delete('/autos/delete/:id',carsDelete);


module.exports = router;