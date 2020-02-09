const rand = require("./randint");
const mysqlConf = require("./mysqlconf");
const mysql = require("mysql");

const mysqlLogin = mysqlConf.mysqlLogin;
const codeChars = "abcdefghijklmnopqrstuvwxyz0123456789";
const codeLength = 6;

exports.generateCode = function(environment) {
	let code = "";
	for (let i = 0; i < codeLength; i++) {
		code += codeChars.charAt(rand.randInt(codeChars.length));
	}
	if (checkCodeAvailability(code)) {
		addCodeToDB(code, environment);
		return code;
	} else {
		return exports.generateCode();
	}
}

function addCodeToDB(code, environment){
	const connection = mysql.createConnection(mysqlLogin);
	connection.connect();
	connection.query(`INSERT INTO codes VALUES (${code}, ${environment})`, (err, res, fields)=>{
		if(err) throw err;
		console.log(res);
	});
	connection.end();
}

function checkCodeAvailability(code) {
	let available = true;
	const connection = mysql.createConnection(mysqlLogin);
	connection.connect();
	connection.query(`SELECT * FROM codes WHERE code = '${code}';`, (error, results, fields) => {
		if (error) throw error;
		if (results.length !== 0) {
			available = false;
		}
	});
	connection.end();
	return available;
}