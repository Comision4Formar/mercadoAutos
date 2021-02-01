const {check, validationResult, body} = require('express-validator');
const {getAdmins} = require('../data/admins')
const admins = getAdmins();

module.exports = [
    check('username')
    .notEmpty()
    .withMessage('El nombre de usuario es requerido'),

    check('pass')
    .notEmpty()
    .withMessage('La constraseña es requerida'),

    body('username').custom(value => {
        let result = admins.find(admin => admin.username.toLowerCase() === value.toLowerCase().trim());

        if(result){
            return false
        }else {
            return true
        }
    }).withMessage('El usuario ya está registrado!')
    
    ]