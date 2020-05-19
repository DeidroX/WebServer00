const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World! TEST');
	res.send('This is just another test message');
	res.send('lel');
});

app.get('/demo', (req, res) => {
	res.set('X-Test', 'See if it works');
	res.status(418);
	res.send('I prefer coffee');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
