require('dotenv').config()

const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];
	// console.log(JSON.parse(token)['token'])
	if (token == null) {
		return res.sendStatus(401);
	}

	//jwt.verify(token, process.env.ACCESS_TOKEN, (err, response) => {
	jwt.verify(token, process.env.ACCESS_TOKEN, (err, response) => {
		if(err) {
			console.log(err)
			return res.sendStatus(403);
		}
		res.locals = response;
		next();
	});
}

module.exports = { authenticateToken: authenticateToken };
