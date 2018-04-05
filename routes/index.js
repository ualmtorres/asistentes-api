var express = require('express');
var router = express.Router();
const alumnosController = require('../controllers/alumnoController');
const sesionesController = require('../controllers/sesionController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //console.log(req);
  //res.json({"nombre":"Manuel"});
});

router.get('/superheroes', function(req, res, next) {
  res.json([
    {"nombre": "Superman"},
    {"nombre": "Batman"}
  ]);
  console.log(req);
});

router.get('/alumnos', alumnosController.getAlumnos);
router.get('/alumnos/:id', alumnosController.getAlumno);
router.post('/alumnos', alumnosController.saveAlumno);
router.delete('/alumnos/:id', alumnosController.deleteAlumno);
router.put('/alumnos/:id', alumnosController.updateAlumno);

router.get('/sesiones', sesionesController.getSesiones);
router.post('/sesiones', sesionesController.saveSesion);

module.exports = router;
