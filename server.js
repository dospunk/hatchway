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
	connection.end();
});

app.get('/app', (req, res)=>{
	const code = req.body.code;
	const connection = mysql.createConnection(mysqlLogin);
	connection.connect();
	let codeValid;
	connection.query(`SELECT * from codes where code = '${code}'`, (err, results, fields)=>{
		if(err) throw err;
		if(results.length !== 1){
			console.error(`Error: code ${code} is associated with ${results.length} environments`);
			res.sendFile("/public/invalidcode.html");
		} else {
			res.sendFile("/public/envs/"+results[0].envId);
		}
	});
	connection.end();
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
