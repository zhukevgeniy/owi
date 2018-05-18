const User = require("./sequelize")["User"];

const createAdmin = async () => {
	return await User.findOrCreate({
		where: {
			name: "root"
		},
		defaults: {
			email: "root@root.com",
			password: "root",
			isAdmin: true
		}
	})
};

const createDummyData = async () => {
	await createAdmin();
};

module.exports = createDummyData;
