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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
