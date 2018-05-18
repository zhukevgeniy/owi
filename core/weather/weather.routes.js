const { Router } = require("express");
const WeatherController = require("./weather.controller");
const passport = require("passport");
const weatherRouter = new Router();

weatherRouter
	.route("/weather/q/:city")
	.get(
		passport.authenticate("jwt", { session: false }),
		WeatherController.getForecastByCity
	);
weatherRouter.route("/weather/ac/:value").get(WeatherController.getCityList);

module.exports = weatherRouter;
