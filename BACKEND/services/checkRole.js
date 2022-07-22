require('dotenv').config()

// Check if account has admin privilidges
function checkRole(req, res, next) {
    console.log("Role: " + res.locals.role + " Role env: " + process.env.USER);
	if (res.locals.role == process.env.USER) {
		res.sendStatus(401);
	} else {
		next();
	}
}

module.exports = { checkRole: checkRole };
