const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const usuarioService = require('./services/usuario');

const port = process.env.PORT || 5000;

//Es un middleware que serializa los cuerpos de las respuestas a notacón JSON
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({ info: 'La api está online' })
});


app.listen(port, () => {
    console.log(`API corriendo en el puerto ${port}`)
});
