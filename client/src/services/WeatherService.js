import fetchJsonp from "fetch-jsonp";

class WeatherService {
	static requestHeaders() {
		const token = sessionStorage.getItem("jwt_token");

		return {
			AUTHORIZATION: `Bearer ${token}`
		};
	}

	static async getWeatherByCity(city) {
		/*const headers = this.requestHeaders();
		const uri = process.env.REACT_APP_API_URI;

		const request = new Request(uri, {
			method: "POST",
			headers: headers,
			body: JSON.stringify({ city })
		});

		try {
			const response = await fetch(request);
			return await response.json();
		} catch (error) {
			return error;
		}*/

		try {
			const weatherResponse = await fetch(
				`http://api.wunderground.com/api/8e79f7891af42765/forecast/${city}.json`
			);
			const weatherData = await weatherResponse.json();
			return [null, weatherData];
		} catch (error) {
			return [error, null];
		}
	}

	static async searchCity(inputVal) {
		if (!inputVal) {
			return [null, await []];
		}

		try {
			const autoCompleteResponse = await fetchJsonp(
				`http://autocomplete.wunderground.com/aq?query=${inputVal}`,
				{
					jsonpCallback: "cb"
				}
			);
			const cityListResponse = await autoCompleteResponse.json();
			const cityList = await cityListResponse["RESULTS"];
			return [null, cityList];
		} catch (error) {
			return [error, null];
		}
	}
}

export default WeatherService;
