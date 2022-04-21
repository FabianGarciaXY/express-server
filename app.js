
// Requiriendo el objeto Express
const express = require('express');
// App de express y puerto de nuestra app: localhost:3000
const app = express();
port = 3000;

// Indicamos el initial path, para la url `localhost: 3000`
app.get('/', (req, res) => {
	res.send('Hello Server');
});

// Agregando una nueva ruta localhost:3000/launchx
// Y respondiendo con text
app.get('/launchx', (req, res) => {
	res.send('Welcome to Launch X');
});

// Retornando un objecto al ingresar a una ruta
app.get('/explorers', (req, res) => {
	const explorer = { name: 'Fabian', msg: 'Hi'}
	res.send(explorer);
});

// Agregando una ruta que recibe parametros
// :name indica que sera un valor enviado por la url
// Entonces se recibe un objeto params que contiene la variable y su valor
// req.params = {'name': 'Fabian'}
app.get('/explorers/:name', (req, res) => {
	res.send(req.params);
})


// Inicializamos la app
app.listen(port, () => {
	console.log(`This server is listening in port ${port}`);
});
