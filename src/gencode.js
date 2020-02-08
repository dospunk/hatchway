const rand = require("./src/randint");

const codeChars = "abcdefghijklmnopqrstuvwxyz0123456789";
const codeLength = 6;

exports.generateCode = function() {
	let code = "";
	for (let i = 0; i < codeLength; i++) {
		code += codeChars.charAt(rand.randInt(codeChars.length));
	}
	return code;
}

exports.checkCodeAvailability = function(code) {
	//do shit
}