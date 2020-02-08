const express = require('express');
const codes = require('./lib/codes');
const mysql = require('mysql');
const mysqlConf = require("./lib/mysqlconf");

const app = express();
const port = process.env.PORT || 3000;
const mysqlLogin = mysqlConf.mysqlLogin;

app.use(express.static('public'));
app.use(express.json())

app.post('/code', (req, res) => {
	res.send(codes.generateCode(req.body.environment));
});

app.post('/envlist', (req, res) => {
	const connection = mysql.createConnection(mysqlLogin);
	connection.connect();
	connection.query('SELECT * from envs;', (error, results, fields) => {
		if(error) throw error;
		res.json(results);
	});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
