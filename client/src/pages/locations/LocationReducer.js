import LocationActionTypes from "./LocationActionTypes";

const initialState = {
	locationList: []
};

const LocationReducer = (state = initialState, action) => {
	switch (action.type) {
		case LocationActionTypes.ADD_LOCATION_TO_USER_LIST:
			return {
				...state,
				locationList: state.locationList.concat(action.payload.location)
			};

		default:
			return state;
	}
};

export default LocationReducer;
