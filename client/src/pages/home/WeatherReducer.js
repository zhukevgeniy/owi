import ActionTypes from "./WeatherActionTypes";

const initialState = {
	completeResultList: [],
	cityCode: "",
	cityName: "",
	temperature: {
		high: {
			celsius: 0.0,
			fahrenheit: 0.0
		},
		low: {
			celsius: 0.0,
			fahrenheit: 0.0
		}
	},
	wind: 0.0,
	iconURL: "",
	description: "",
	isLoading: false,
	isLoaded: false,
	error: null
};

const WeatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.FETCH_WEATHER_REQUEST:
			return {
				...state,
				isLoading: true
			};

		case ActionTypes.FETCH_WEATHER_SUCCESS:
			console.log(action.payload.weather);

			const today =
				action.payload.weather["forecast"]["simpleforecast"]["forecastday"][0];

			return {
				...state,
				isLoading: false,
				isLoaded: true,

				iconURL: today["icon_url"],
				description: today["conditions"],

				temperature: {
					...state.temperature,
					high: {
						...state.temperature.high,
						celsius: today["high"]["celsius"],
						fahrenheit: today["high"]["fahrenheit"]
					},
					low: {
						...state.temperature.low,
						celsius: today["low"]["celsius"],
						fahrenheit: today["low"]["fahrenheit"]
					}
				},
				wind: today["avewind"]["kph"]
			};

		case ActionTypes.FETCH_WEATHER_FAIL:
			return {
				...state,
				error: action.payload.error,
				isLoading: false,
				isLoaded: true
			};

		case ActionTypes.SET_COMPLETE_RESULT_LIST:
			return {
				...state,
				completeResultList: action.payload.cityList
			};

		case ActionTypes.SET_CITY:
			return {
				...state,
				cityCode: action.payload.cityCode,
				cityName: action.payload.cityName
			};

		default:
			return state;
	}
};

export default WeatherReducer;
