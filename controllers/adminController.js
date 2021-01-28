const path = require('path');
const bcrypt = require('bcrypt');

const {getAutos, setAutos} = require(path.join('..','data','autos'));
const {getAdmins, setAdmins} = require(path.join('..','data','admins'));

const autos = getAutos();
const admins = getAdmins();

module.exports = {
    register : (req,res) =>{
        res.render('admin/register')
    },
    login : (req, res) => {
        res.render('admin/login')
    },
    processRegister : (req, res) => {
        const {username, pass} = req.body;

        let lastID = 0;
        admins.forEach(admin => {
            if (admin.id > lastID) {
                lastID = admin.id
            }
        });

        let passHash = bcrypt.hashSync(pass.trim(),12)

        const newAdmin = {
            id : +lastID + 1,
            username: username.trim(),
            pass : passHash
        }

        admins.push(newAdmin);

        setAdmins(admins);

        res.redirect('/admin/login');

    },
    processLogin : (req,res) => {
        const {username, pass} = req.body;

        let result = admins.find(admin => admin.username.toLowerCase() === username.toLowerCase().trim());

        if(result){
            if(bcrypt.compareSync(pass.trim(),result.pass)){
                return res.redirect('/admin')
            }else{
                res.render('admin/login',{
                    error : "Credenciales inválidas!"
                })
            }
        }else{
            res.render('admin/login',{
                error : "Credenciales inválidas!"
            })
        }
    },
    index : (req,res) => {
        res.render('admin/index')
    },
    carsList : (req,res) => {

        res.render('admin/carsList',{
            autos
        })
    },
    carsCreate : (req,res) => {

        res.render('admin/carsCreate')
    },
    carsStore : (req,res) => {
        let lastID = 1;
        autos.forEach(auto => {
            if (auto.id > lastID) {
                lastID = auto.id
            }
        });

        const {marca,modelo,color,anio,img} = req.body;

        const auto = {
            id: Number(lastID + 1),
            marca,
            modelo,
            color,
            anio,
            img
        }

        autos.push(auto)

        setAutos(autos);
        res.redirect('/admin/autos/list');

    },
    carsEdit : (req,res) => {
        
        const auto = autos.find(auto => auto.id === +req.params.id);

        res.render('admin/carsEdit',{
            auto
        })
    },
    carsUpdate : (req,res) => {
        const {marca,modelo,color,anio,img} = req.body;

        autos.forEach(auto => {
            if(auto.id === +req.params.id){
                auto.id = Number(req.params.id);
                auto.marca = marca;
                auto.modelo = modelo;
                auto.anio = anio;
                auto.color = color;
                auto.img = img
            }
        });

        setAutos(autos);
        res.redirect('/admin/autos/list');
    },
    carsDelete : (req,res) => {
        autos.forEach(auto => {
            if(auto.id === +req.params.id){
                var aEliminar = autos.indexOf(auto);
                autos.splice(aEliminar,1)
            }
        });
        
        setAutos(autos);
        res.redirect('/admin/autos/list');
    }
}