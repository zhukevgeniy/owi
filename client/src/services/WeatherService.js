class WeatherService {
	static requestHeaders() {
		const token = sessionStorage.getItem("jwt_token");

		return {
			AUTHORIZATION: `Bearer ${token}`
		};
	}

	static getURI = () => process.env.REACT_APP_SERVER_API_URI;

	static async getWeatherByCity(city) {
		const uri = this.getURI();
		const url = `${uri}/weather${city}`;

		try {
			const weatherResponse = await fetch(this.getRequest(url));
			const weatherData = await weatherResponse.json();
			return [null, weatherData];
		} catch (error) {
			return [error, null];
		}
	}

	static getRequest(url) {
		const headers = this.requestHeaders();
		return new Request(url, {
			headers: headers
		});
	}

	static async searchCity(inputVal, isUserRequest) {
		if (!inputVal) {
			return [null, await []];
		}

		const uri = this.getURI();
		const url = `${uri}/weather/ac/${inputVal}`;

		const localURI = process.env.REACT_APP_SERVER_API_URI;
		const localURL = `${localURI}/location`;

		const accessURL = isUserRequest ? localURL : url;

		try {
			const autoCompleteResponse = await fetch(this.getRequest(accessURL));

			const cityListResponse = await autoCompleteResponse.json();
			const cityList = await cityListResponse["RESULTS"];
			return [null, cityList];
		} catch (error) {
			return [error, null];
		}
	}
}

export default WeatherService;
