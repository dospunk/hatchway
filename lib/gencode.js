const rand = require("./randint");
const mysqlConf = require("./mysqlconf");

const mysqlLogin = mysqlConf.mysqlLogin;
const codeChars = "abcdefghijklmnopqrstuvwxyz0123456789";
const codeLength = 6;

let generateCode = function() {
	let code = "";
	for (let i = 0; i < codeLength; i++) {
		code += codeChars.charAt(rand.randInt(codeChars.length));
	}
	if (checkCodeAvailability(code)) {
		return code;
	} else {
		return generateCode();
	}
}

function checkCodeAvailability(code) {
	let available = true;
	const connection = mysql.createConnection(mysqlLogin);
	connection.connect();
	connection.query('SELECT * from codes where code = '+code+';', function (error, results, fields) {
		if (error) throw error;
		if (results.length !== 0) {
			available = false;
		}
	});
	connection.end();
	return available;
}

exports = {
	'generateCode': generateCode
}