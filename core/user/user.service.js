const User = require("../../config/sequelize")["User"];

class UserService {
	static async createOrFindUser(credentials) {
		const { name, ...rest } = credentials;

		return await User.findOrCreate({
			where: {
				name
			},
			defaults: {
				...rest
			}
		});
	}

	static async removeByEmail(email) {

		return await User.destroy({
			where: {
				email: email
			}
		})
	}

	static async comparePasswords(user, password) {
		const hashedPwd = await User.generateHash(password);
		return await user.comparePasswords(hashedPwd);
	}

	static async getUserList() {
		return await User.findAll();
	}

	static verifyToken(token) {
		User.verifyJwt(token);
	}
}

module.exports = UserService;
