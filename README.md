# Curso MEAN - Gerardo Parra

* Instalar Express Generator (como Angular CLI): `npm install -g express-generator`
* Crear aplicación: `express asistentes-api`

## Archivos de interés

* La aplicación se inicia en `bin/www`. Echar un vistazo a ese archivo
* En `app.js` ya aparecen definidas las rutas (los archivos de rutas). Podemos eliminar la de `users`
    * Para tener un gestor de rutas para la API. Crear un archivo `routes/api.js` para las rutas de la API
    * `var apiRouter = require('./routes/api');`
    * `app.user('/api', apiRouter);`
    * Entonces, todo lo que llegue por `/api` se encarga `apiRouter` (`routes/api`)

* CORS: Configura en el servidor de la API qué tipo de peticiones y desde dónde se pueden realizar.

## Creación de nuestra primera ruta

En `index.js` para que atienda a `http://localhost:3000/superheroes`
```
router.get('/superheroes', function(req, res, next) {
  res.json([
    {"nombre": "Superman"},
    {"nombre": "Batman"}
  ]);
  console.log(req);
});
```

Instalar dependencia Mongoose
npm install mongoose --save (guarda el mongoose en package.json)

Crear models/alumnos.js


