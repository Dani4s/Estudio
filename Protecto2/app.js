const express = require('express');
const app = express();

// Sirve archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('El servidor está corriendo en el puerto 3000');
});

