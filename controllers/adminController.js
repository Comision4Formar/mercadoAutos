const autos = require('../data/autos');
const fs = require('fs');

module.exports = {
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
            id: lastID + 1,
            marca,
            modelo,
            color,
            anio,
            img
        }

        autos.push(auto)

        fs.writeFileSync('./data/autos.json',JSON.stringify(autos),'utf-8');
        res.redirect('/admin/autos/list');

    },
    carsEdit : (req,res) => {
        
    },
    carsUpdate : (req,res) => {
        
    },
    carsDelete : (req,res) => {
        
    }
}