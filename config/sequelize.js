const Sequelize = require("sequelize");
const getModelList = require("../utils/get-model-list");

const {
	DB_NAME = "test",
	DB_USER = "root",
	DB_PASSPORT = null,
	DB_HOST = "127.0.0.1",
	DB_PORT = "3306",
	DB_DIALECT = "mysql"
} = process.env;

const sequelize = new Sequelize(
	DB_NAME,
	DB_USER,
	DB_PASSPORT,
	{
		host: DB_HOST,
		dialect: DB_DIALECT,
		port: DB_PORT,
		operatorsAliases: false,
		define: {
			charset: "utf8mb4",
			collate: "utf8mb4_unicode_ci",
			timestamps: true
		}
	}
);

const models = getModelList();


const database = models.reduce((acc, modelPath) => {
	const model = sequelize.import(modelPath);
	acc[model.name] = model;
	return acc;
}, {});



Object.keys(database).forEach(modelName => {
	if ("associate" in database[modelName]) {
		database[modelName].associate(database);
	}
});

database["sequelize"] = sequelize;
database["Sequelize"] = Sequelize;

module.exports = database;
