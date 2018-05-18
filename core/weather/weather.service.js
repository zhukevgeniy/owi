const fetchJsonp = require("fetch-jsonp");

const request = require("request");

class WeatherService {
	static getURI() {
		const { API_URI, API_KEY } = process.env;

		return `${API_URI}/${API_KEY}`;
	}

	static async getWeatherByCityCode(cityCode) {
		const uri = this.getURI();
		const url = `${uri}/forecast/q/${cityCode}.json`;

		return new Promise((res, rej) => {
			request(url, (error, response, body) => {
				if (error) {
					rej([error, null]);
				} else {
					const weather = JSON.parse(body);
					res([null, weather]);
				}
			});
		});
	}

	static async getAutoCompletedList(searchVal) {
		const uri = "http://autocomplete.wunderground.com/aq?query";
		const url = `${uri}=${searchVal}`;

		return new Promise((res, rej) => {
			request(url, (error, response, body) => {
				if (error) {
					rej([error, null]);
				} else {
					const cityListResponse = JSON.parse(body);
					const cityList = cityListResponse["RESULTS"];
					res([null, cityList]);
				}
			});
		});
	}
}

module.exports = WeatherService;
