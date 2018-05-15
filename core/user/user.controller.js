const UserService = require("./user.service");

const showProfile = async (req, res) => {
	res.json({
		status: 200,
		user: {
			id: req.user.id,
			name: req.user.name,
			email: req.user.email
		}
	});
};

const signup = async (req, res) => {
	try {
		const user = await UserService.createUser({
			name: req.body.name,
			email: req.body.email,
			isAdmin: false
		});

		res.json({
			status: 201,
			msg: "User has been successfully created",
			token: user.getJwt()
		});
	} catch (error) {
		res.json({
			status: 422,
			msg: "Error occured during creating user"
		});
	}
};

const login = async (req, res) => {
	res.json({
		status: 200,
		token: "???"
	});
};

module.exports = {
	login,
	signup,
	showProfile
};
