const models = require("./sequelize");

const configureDBSync = async () => {
	try {
		await models.sequelize.authenticate();
		console.info("Successfully connected to MySQL database");
	} catch (err) {
		console.error("Unable to connect to SQL database:", err);
	}

	// if (process.env.NODE_ENV === "development") {
	return await models.sequelize.sync({alter: true, force: true});
	// }
};

module.exports = configureDBSync;
