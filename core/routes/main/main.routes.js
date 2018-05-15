const { Router } = require("express");
// const passport = require("passport");
const MainController = require("./main.controller");
const mainRouter = new Router();

const userRoutes = require("../../user/user.routes");

mainRouter.route("/").get(MainController.render);

mainRouter.use(userRoutes);
/*mainRouter
	.route("/dashboard")
	.get(
		passport.authenticate("jwt", { session: false }),
		MainController.getDashboard
	);*/

module.exports = mainRouter;
