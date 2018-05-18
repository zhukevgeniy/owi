const LocationService = require("./location.service");

const saveLocation = async (req, res) => {
	const location = {
		name: req.body.name,
		country: req.body.c,
		uri_token: req.body["l"]
	};

	const [error, _] = await LocationService.createLocation(location);

	return error
		? res.json({
				msg: "Fail to add location",
				status: 411
		  })
		: res.json({
				msg: "location has been added",
				status: 201
		  });
};

const getAllLocations = async (req, res) => {
	const [error, locations] = await LocationService.getLocations();

	return error
		? res.status(503).send({
				msg: "Fail to get all locations",
				status: 503
		  })
		: res.status(200).send({
				status: "200",
				RESULTS: locations
		  });
};

module.exports = {
	saveLocation,
	getAllLocations
};
