import UsersActionTypes from "./UsersActionTypes";

const initialState = {
	list: [],
	isLoading: false,
	isLoaded: false,
	error: null
};

const UsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case UsersActionTypes.FETCH_ALL_USERS_REQUEST:
			return {
				...state,
				isLoading: true
			};

		case UsersActionTypes.FETCH_ALL_USERS_FAIL:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				error: action.payload.error
			};

		case UsersActionTypes.FETCH_ALL_USERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLoaded: true,
				list: state.list.concat(action.payload.userList)
			};

		case UsersActionTypes.REMOVE_USER_SUCCESS:
			return {
				...state,
				list: state.list.filter(user => user.email !== action.payload.email)
			};

		default:
			return state;
	}
};

export default UsersReducer;
