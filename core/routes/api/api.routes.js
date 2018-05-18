const { Router } = require("express");
const ApiController = require("./api.controller");
const {locationRoutes} = require("../../location");
const apiRouter = new Router();

apiRouter.route("/").get(ApiController.getStaticInfo);
apiRouter.route("/hello").get(ApiController.sayHi);

apiRouter
	.use(locationRoutes);

module.exports = apiRouter;
