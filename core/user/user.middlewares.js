const checkAuthentication = (req, res, next) => {

	if (req.isAuthenticated()) {
		//req.isAuthenticated() will return true if user is logged in
		next();
	} else {
		res.redirect("/sign-up");
	}
};

module.exports = {
	checkAuthentication
};
