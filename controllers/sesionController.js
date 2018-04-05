const Sesion = require('../models/sesion');
const Alumno = require('../models/alumno');

module.exports.getSesiones = (req, res) => {
    Sesion
    .find()
    .populate('alumnos')
    .exec( (err, sesiones) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Se ha producido un error al obtener la lista de sesiones',
                error: err
            });
        }
        res.status(200).json({
            success: true,
            items: sesiones
        });
    } )
}

module.exports.saveSesion = (req, res) => {
    let sesion = new Sesion(req.body);

    sesion.save( (err, result) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Se ha producido un error al insertar la sesión',
                error: err
            });
        }
        
        Sesion.find().populate('alumnos').exec((err, sesiones) => {
            if (err) {
                return res.status(500).json({
                    mensaje: 'Se ha producido un error al obtener la lista de sesiones',
                    error: err
                });
            }
            res.status(200).json({
                success: true,
                items: sesiones
            });
        });

    })
}
