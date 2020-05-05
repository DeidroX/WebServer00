const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
	res.send('This is just another test message');
	res.send('lel');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
