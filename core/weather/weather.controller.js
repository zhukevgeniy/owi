const WeatherService = require("./weather.service");
const { logAction, parseHrtimeToSeconds } = require("./weather.helpers");
const getIP = require('ipware')().get_ip;

const getForecastByCity = async (req, res) => {
	const cityCode = req.params.city;

	const startTime = process.hrtime();

	const [error, weather] = await WeatherService.getWeatherByCityCode(cityCode);

	const elapsedSeconds = parseHrtimeToSeconds(process.hrtime(startTime));

	await logAction({
		uri_token: cityCode,
		userID: req.user.id,
		userIP: getIP(req)["clientIp"],
		queryTime: elapsedSeconds,
		queryStatus: error ? "NO RESPONSE" : "SUSPEND"
	});

	return error
		? res.status(503).send({ msg: "Can not get the weather" })
		: res.status(200).send(weather);
};

const getCityList = async (req, res) => {
	const searchVal = req.params.value;
	const [error, cityList] = await WeatherService.getAutoCompletedList(
		searchVal
	);

	return error
		? res.status(503).send({ msg: "Can not get city list" })
		: res.status(200).send({ RESULTS: cityList });
};

module.exports = {
	getForecastByCity,
	getCityList
};
