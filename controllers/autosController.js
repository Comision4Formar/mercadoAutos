const autos = require('../data/autos');

module.exports = {
    index : (req, res) => {
        res.render('autos',{
            title : "Listado de Autos",
            autos
        })
    },
    show : (req,res) =>{

        let auto = autos.find(auto=>auto.id === Number(req.params.id));


        res.render('autosShow',{
            title: "Vista de Detalle",
            auto
        })
    }
}