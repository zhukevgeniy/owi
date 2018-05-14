const { Router } = require("express");
const MainController = require("./main.controller");
const mainRouter = new Router();

mainRouter.route("/").get(MainController.render);

module.exports = mainRouter;
