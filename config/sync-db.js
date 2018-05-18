const models = require("./sequelize");
const createDummyData = require("./create-dummy-data");

const configureDBSync = async () => {
	try {
		await models.sequelize.authenticate();
		console.info("Successfully connected to MySQL database");
	} catch (err) {
		console.error("Unable to connect to SQL database:", err);
	}

	/*
	* {alter: true, force: true}
	* */
	await models.sequelize.sync();
	await createDummyData();
};

module.exports = configureDBSync;
