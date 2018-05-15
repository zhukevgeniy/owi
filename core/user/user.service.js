const User = require("../../config/sequelize")["User"];


class UserService {
	static async createUser(credentials) {
		return await User.create(credentials);
	}

	static verifyToken(token) {
		User.verifyJwt(token)
	}
}

/*
configureDBSync()
	.then(() => {
		return User.create({
			name: "test",
			email: "test@test.co",
			isAdmin: false
		});
	})
	.then(testUser => {
		console.log(testUser)
	})
	.catch(err => console.error(err))

*/


module.exports = UserService;
