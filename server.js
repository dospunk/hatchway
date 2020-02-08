const express = require('express');
const codeGen = require('./lib/gencode');
const mysql = require('mysql');
const mysqlConf = require("./lib/mysqlconf");

const app = express();
const port = process.env.PORT || 3000;
const mysqlLogin = mysqlConf.mysqlLogin;

app.use(express.static('public'));


app.get('/code', (req, res) => {
	res.send(codeGen.generateCode());
});

var connection = mysql.createConnection(mysqlLogin);
connection.connect();

connection.query('SELECT * from envs;', function (error, results, fields) {
	if (error) throw error;
	console.log(results);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

connection.end();