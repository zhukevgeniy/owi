const {Router} = require("express");
const passport = require("passport");
const UserController = require("./user.controller");

const userRouter = new Router();

userRouter.route("/signup").post(UserController.signup);


module.exports = userRouter;
