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
