const mongoose = require("mongoose");
require('dotenv').config();

// Cadena de conexión
const URI = process.env.MONGODB_URI;
if (!URI) {
  console.error(
    "ERROR: La variable de entorno MONGODB_URI no está configurada."
  );
  process.exit(1); // Detiene la ejecución si no se encuentra la URI
}

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("La base de datos ha sido conectada: ", URI))
  .catch((err) =>
    console.error("Error al conectar con la base de datos: ", err)
  );









/*
mongoose
  .connect('mongodb+srv://riki16:riki16@cluster0.rzhig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("La base de datos ha sido conectada: ", URI))
  .catch((err) =>
    console.error("Error al conectar con la base de datos: ", err)
  );


*/