const { Router } = require("express");
const ApiController = require("./api.controller");
const UserController = require("../../user/user.controller");
const { locationRoutes } = require("../../location");
const { logRoutes } = require("../../log");
const { weatherRoutes } = require("../../weather");

const apiRouter = new Router();

apiRouter.route("/").get(ApiController.getStaticInfo);
apiRouter.route("/hello").get(ApiController.sayHi);
apiRouter.route("/users").get(UserController.getUserList);


apiRouter
	.use(locationRoutes)
	.use(logRoutes)
	.use(weatherRoutes);

module.exports = apiRouter;
