exports.mysqlLogin = {
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
};