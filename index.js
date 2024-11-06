const express = require("express"); // Importamos el paquete express
const app = express(); // Incializar servidor con express
const port = 3000;

// Logger
app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(express.static('public')); // Middleware para servir archivos estáticos de JS, styles, assets, ...

// -- CONFIGURACIÓN DE VISTAS - MOTOR DE PLANTILLAS
app.set('view engine', 'pug');
app.set('views', './views');

// // Rutas importadas / WEB
const pelisWebRoutes = require("./routes/pelis.web.routes.js")

// -- PUG TEMPLATE /  // localhost:3000/home etc.
app.use('/', pelisWebRoutes);

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
