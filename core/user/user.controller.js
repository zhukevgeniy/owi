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

const getUserList = async (req, res) => {
	try {
		const users = await UserService.getUserList();
		res.status(200).send({ users });
	} catch (error) {
		res.status(422).send({ msg: "Error while getting user list" });
	}
};

const isCorrectPwd = async (user, password) => {
	return await UserService.comparePasswords(user, password);
};

const signup = async (req, res) => {

	const creds = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		isAdmin: false
	};

	try {
		const [user, isNewUser] = await UserService.createOrFindUser(creds);

		if (!isNewUser) {
			if (isCorrectPwd(user, creds.password)) {
				return res.status(201).send({
					msg: "User has been successfully logged",
					token: user.getJwt()
				});
			} else {
				res.json({
					status: "wrong pwd"
				});
			}
		} else {
			return res.status(201).send({
				msg: "User has been successfully created",
				token: user.getJwt()
			});
		}
	} catch (error) {
		return res.json({
			status: 422,
			msg: "Error occured during creating user",
			error
		});
	}
};

module.exports = {
	getUserList,
	signup
};
