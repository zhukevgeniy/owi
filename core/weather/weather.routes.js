const { Router } = require("express");
const WeatherController = require("./weather.controller");

const weatherRouter = new Router();

weatherRouter.route("/weather/q/:city").get(WeatherController.getForecastByCity);
weatherRouter.route("/weather/ac/:value").get(WeatherController.getCityList);

module.exports = weatherRouter;
