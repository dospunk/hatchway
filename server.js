const express = require('express');
const codes = require('./lib/codes');
const mysql = require('mysql');
const mysqlConf = require("./lib/mysqlconf");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const mysqlLogin = mysqlConf.mysqlLogin;

app.use(express.static('public'));
app.use(express.json())

app.post('/code', (req, res) => {
	console.dir(req.body);
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

app.get('/app/:code', (req, res)=>{
	const code = req.params.code;
	const connection = mysql.createConnection(mysqlLogin);
	connection.connect();
	connection.query(`SELECT path FROM envs JOIN codes ON envs.envId = codes.envId WHERE code = '${code}';`, (err, results, fields)=>{
		if(err) throw err;
		if(results.length !== 1){
			console.error(`Error: code ${code} is associated with ${results.length} environments`);
			res.sendFile(path.join(__dirname, "./public", "invalidcode.html"));
		} else {
			console.log(results);
			res.sendFile(path.join(__dirname, "./public/envs", results[0].path));
		}
	});
	connection.end();
});

app.post('/closecode', (req, res)=>{
	const code = req.body.code;
	const connection = mysql.createConnection(mysqlLogin);
	connection.connect();
	connection.query(`DELETE FROM codes WHERE code = '${code}';`, (err, results, fields) => {
		if(err) throw err;
		console.log(results);
		res.send(results);
		//TODO: if code isn't deleted, log error
	});
	connection.end()
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
