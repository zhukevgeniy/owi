const api = require("./api/api.routes");
const main = require("./main/main.routes");
const passport = require("passport");
const configurePassportAuth = require("../../config/passport");

configurePassportAuth(passport);

const configureRoutes = app => {
	app
		.use("/", main)
		.use("/api/v1", api)
};

module.exports = configureRoutes;
