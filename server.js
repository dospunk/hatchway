const express = require('express');
const codeGen = require('./lib/gencode');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;
const mysqlLogin = {
	host: process.env.SQLIP,
	//port: '3306',
	user: 'root',
	password: process.env.SQLPASS,
	database: 'vredudb',
	ssl: {
		ca: process.env.SQLSERVERCA,
		key: process.env.SQLCLIENTKEY,
		cert: process.env.SQLCLIENTCERT
	}
}

app.use(express.static('public'));


app.get('/code', (req, res) => {
	res.send(codeGen.generateCode());
});

var connect = mysql.createConnection(mysqlLogin);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

connect.end();