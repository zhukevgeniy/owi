import LogsActionTypes from "./LogsActionTypes";

const initialState = {
	list: [],
	isLoading: false,
	isLoaded: false,
	error: null
};

const LogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case LogsActionTypes.FETCH_ALL_LOGS_REQUEST:
			return {
				...state,
				isLoading: true
			};

		case LogsActionTypes.FETCH_ALL_LOGS_FAIL:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				error: action.payload.error
			};

		case LogsActionTypes.FETCH_ALL_LOGS_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				list: state.list.concat(action.payload.logList)
			};

		default:
			return state;
	}
};

export default LogsReducer;
