const express = require('express');
const codeGen = require('./lib/gencode');

const app = express();
const port = process.env.PORT || 3000;
const sqlIP = process.env.SQLIP;

app.use(express.static('public'));


app.get('/code', (req, res) => {
	return codeGen.generateCode();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));