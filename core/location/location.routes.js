const { Router } = require("express");
const LocationController = require("./location.controller");

const locationRouter = new Router();

locationRouter.route("/location").post(LocationController.saveLocation);
locationRouter.route("/location").get(LocationController.getAllLocations);

module.exports = locationRouter;
