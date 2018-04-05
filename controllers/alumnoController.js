const Alumno = require('../models/alumno');

module.exports.getAlumnos = (req, res) => {
    Alumno.find().exec((err, alumnos) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Se ha producido un error al obtener la lista de alumnos',
                error: err
            });
        }
        res.status(200).json({
            success: true,
            items: alumnos
        });
    });
}

module.exports.getAlumno = (req, res) => {
    Alumno.findById(req.params.id).exec((err, alumno) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Se ha producido un error al obtener el alumno',
                error: err
            });
        }
        res.status(200).json({
            success: true,
            items: alumno
        });      
    })
}

module.exports.saveAlumno = (req, res) => {
    let alumno = new Alumno({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        telefono: req.body.telefono,
        fechaNacimiento: req.body.fechaNacimiento
    });

    alumno.save( (err, result) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Se ha producido un error al insertar el alumno',
                error: err
            });
        }
        
        Alumno.find().exec((err, alumnos) => {
            if (err) {
                return res.status(500).json({
                    mensaje: 'Se ha producido un error al obtener la lista de alumnos',
                    error: err
                });
            }
            res.status(200).json({
                success: true,
                items: alumnos
            });
        });

    })
}

module.exports.deleteAlumno = (req, res) => {
    Alumno.findByIdAndRemove(req.params.id).exec( (err, alumno) => {
        if (err) {
            return res.status(500).json({
                mensaje: 'Se ha producido un error al eliminar el alumno',
                error: err
            });
        }
        
        Alumno.find().exec((err, alumnos) => {
            if (err) {
                return res.status(500).json({
                    mensaje: 'Se ha producido un error al obtener la lista de alumnos',
                    error: err
                });
            }
            res.status(200).json({
                success: true,
                items: alumnos
            });
        });
    } );
}

module.exports.updateAlumno = (req, res) => {
    let alumno = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        telefono: req.body.telefono,
        fechaNacimiento: req.body.fechaNacimiento
    };

    Alumno.findByIdAndUpdate(req.params.id, alumno, (err, alumno) => { // HE dejado de usar exec()
        if (err) {
            return res.status(500).json({
                mensaje: 'Se ha producido un error al eliminar el alumno',
                error: err
            });
        }
        
        Alumno.find().exec((err, alumnos) => {
            if (err) {
                return res.status(500).json({
                    mensaje: 'Se ha producido un error al modificar la lista de alumnos',
                    error: err
                });
            }
            res.status(200).json({
                success: true,
                items: alumnos
            });
        });

    });
}

