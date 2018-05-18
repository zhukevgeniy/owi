import LocationActionTypes from "./LocationActionTypes";
import LocationService from "../../services/LocationService";

export const addLocationToUserList = location => {
	return {
		type: LocationActionTypes.ADD_LOCATION_TO_USER_LIST,
		payload: {
			location
		}
	};
};

export const throwLocationCreationError = error => {
	return {
		type: LocationActionTypes.THROW_LOCATION_CREATION_ERROR,
		payload: {
			error
		}
	};
};

export const addLocation = location => {
	return async dispatch => {
		const status = await LocationService.saveLocation(location);
		return status.isCompleted()
			? dispatch(addLocationToUserList(location))
			: dispatch(throwLocationCreationError(status.error));
	};
};

export const fetchLocationsRequest = () => {
	return {
		type: LocationActionTypes.FETCH_LOCATION_REQUEST
	};
};

export const fetchLocationsSuccess = locations => {
	return {
		type: LocationActionTypes.FETCH_LOCATION_SUCCESS,
		payload: {
			locations
		}
	};
};

export const fetchLocationsFail = error => {
	return {
		type: LocationActionTypes.FETCH_LOCATION_FAIL,
		payload: {
			error
		}
	};
};

export const getLocations = () => {
	return async dispatch => {
		dispatch(fetchLocationsRequest());
		const [error, locations] = await LocationService.getLocationList();

		return error
			? dispatch(fetchLocationsFail(error))
			: dispatch(fetchLocationsSuccess(locations));
	};
};
