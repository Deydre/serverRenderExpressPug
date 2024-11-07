const express = require("express"); // Importamos el paquete express
const app = express(); // Incializar servidor con express
const port = 3000;

// Logger
app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(express.static('public')); // Middleware para servir archivos estáticos de JS, styles, assets, ...

// Configuración de express.urlencoded como middleware
app.use(express.urlencoded({ extended: false })); // Trabajar con los datos del formulario
const manage404 = require("./middlewares/manage404");

// -- CONFIGURACIÓN DE VISTAS - MOTOR DE PLANTILLAS
app.set('view engine', 'pug');
app.set('views', './views');

// // Rutas importadas / WEB
const pelisWebRoutes = require("./routes/pelis.web.routes.js")

// -- PUG TEMPLATE /  // localhost:3000/home etc.
app.use('/', pelisWebRoutes);
// app.use('/film', pelisWebRoutes);

// Para ruta no existente
app.use("*", manage404);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
