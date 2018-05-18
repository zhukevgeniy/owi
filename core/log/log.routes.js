const { Router } = require("express");
const LogController = require("./log.controller");

const logRouter = new Router();

logRouter.route("/logs").get(LogController.getAllLogs);

module.exports = logRouter;
