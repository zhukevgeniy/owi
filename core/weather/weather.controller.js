const WeatherService = require("./weather.service");

const getForecastByCity = async (req, res) => {
	const cityCode = req.params.city;
	const [error, weather] = await WeatherService.getWeatherByCityCode(cityCode);

	return error
		? res.status(503).send({ msg: "Can not get the weather" })
		: res.json(weather);
};

const getCityList = async (req, res) => {
	const searchVal = req.params.value;
	const [error, cityList] = await WeatherService.getAutoCompletedList(searchVal);

	return error
		? res.status(503).send({ msg: "Can not get city list" })
		: res.json({ RESULTS: cityList });
};

module.exports = {
	getForecastByCity,
	getCityList
};
