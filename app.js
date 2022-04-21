
// Requiriendo el objeto Express
const express = require('express');
// App de express y puerto de nuestra app: localhost:3000
const app = express();
port = 3000;

// Indicamos el initial path, para la url `localhost: 3000`
app.get('/', (req, res) => {
	res.send('Hello Server');
});

// Inicializamos la app
app.listen(port, () => {
	console.log(`This server is listening in port ${port}`);
});
