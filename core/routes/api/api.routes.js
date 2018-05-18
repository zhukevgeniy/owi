const { Router } = require("express");
const ApiController = require("./api.controller");
const UserController = require("../../user/user.controller");
const {locationRoutes} = require("../../location");
const apiRouter = new Router();

apiRouter.route("/").get(ApiController.getStaticInfo);
apiRouter.route("/hello").get(ApiController.sayHi);

apiRouter.route("/users").get(UserController.getUserList);

apiRouter
	.use(locationRoutes);

module.exports = apiRouter;
