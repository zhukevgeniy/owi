const { Router } = require("express");
const ApiController = require("./api.controller");

const apiRouter = new Router();

apiRouter.route("/").get(ApiController.getStaticInfo);
apiRouter.route("/hello").get(ApiController.sayHi);

module.exports = apiRouter;