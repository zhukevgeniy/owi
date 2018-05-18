import LocationActionTypes from "./LocationActionTypes";

const initialState = {
	list: [],
	isLoaded: false,
	isLoading: false,
	error: null
};

const LocationReducer = (state = initialState, action) => {
	switch (action.type) {
		case LocationActionTypes.ADD_LOCATION_TO_USER_LIST:
			return {
				...state,
				list: [action.payload.location, ...state.list]
			};

		case LocationActionTypes.FETCH_LOCATION_REQUEST:
			return {
				...state,
				isLoading: true
			};

		case LocationActionTypes.FETCH_LOCATION_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoaded: true,

				list: state.list.concat(action.payload.locations)
			};

		case LocationActionTypes.FETCH_LOCATION_FAIL:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				error: action.payload.error
			};

		default:
			return state;
	}
};

export default LocationReducer;
