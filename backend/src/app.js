const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

//middlewares
app.use(cors()); // Hacer consultas entre servidores
app.use(express.json()); // Envio de JSON cuando se hace peticiones


app.set("port", process.env.PORT || 4000);

// Aquí puedes importar rutas si ya tienes
// const userRoutes = require('./routes/user.routes');
// app.use('/api/users', userRoutes);

module.exports = app;