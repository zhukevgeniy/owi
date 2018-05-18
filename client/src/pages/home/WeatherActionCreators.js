import ActionTypes from "./WeatherActionTypes";
import WeatherService from "../../services/WeatherService";

export const fetchWeatherRequest = () => {
	return {
		type: ActionTypes.FETCH_WEATHER_REQUEST
	};
};

export const fetchWeatherSuccess = weather => {
	return {
		type: ActionTypes.FETCH_WEATHER_SUCCESS,
		payload: {
			weather
		}
	};
};

export const fetchWeatherFail = error => {
	return {
		type: ActionTypes.FETCH_WEATHER_FAIL,
		payload: {
			weatherRequestStatusError: error
		}
	};
};

export const getWeather = () => {
	return async (dispatch, getState) => {
		dispatch(fetchWeatherRequest());



		const cityCode = getState().weather.cityCode;

		const [error, weather] = await WeatherService.getWeatherByCity(cityCode);

		return error
			? dispatch(fetchWeatherFail(error))
			: dispatch(fetchWeatherSuccess(weather));
	};
};

export const setCity = ({cityCode, cityName}) => {
	return {
		type: ActionTypes.SET_CITY,
		payload: {
			cityCode,
			cityName
		}
	};
};

export const setCompleteResultList = cityList => {
	return {
		type: ActionTypes.SET_COMPLETE_RESULT_LIST,
		payload: {
			cityList
		}
	};
};

export const setErrorOnRequestCityList = error => {
	return {
		type: ActionTypes.SET_ERROR_ON_REQUEST_CITY_LIST,
		payload: {
			error
		}
	};
};

export const searchCityRequest = (userInputVal, isUserRequest = false) => {
	return async dispatch => {
		const [error, cityCompleteResultList] = await WeatherService.searchCity(
			userInputVal,
			isUserRequest
		);
		return error
			? dispatch(setErrorOnRequestCityList(error))
			: dispatch(setCompleteResultList(cityCompleteResultList));
	};
};

export const addCityToUserList = (city) => {
	return {
		type: ActionTypes.ADD_CITY_TO_USER_LIST,
		payload: {
			city
		}
	}
};
