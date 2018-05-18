import SignUpActionTypes from "./SignUpActionTypes";

const initialState = {
	isLoading: false,
	isLoaded: false,
	jwtToken: null,
	error: null
};

const SignUpReducer = (state = initialState, action) => {
	switch (action.type) {
		case SignUpActionTypes.SIGN_UP_FETCH_REQUEST:
			return {
				...state,
				isLoading: true
			};

		case SignUpActionTypes.SIGN_UP_FETCH_SUCCESS:
			return {
				...state,
				isLoading: true,
				isLoaded: true,
				jwtToken: action.payload.jwtToken
			};

		case SignUpActionTypes.SIGN_UP_FETCH_FAIL:
			return {
				...state,
				isLoading: true,
				isLoaded: true,
				error: action.payload.error
			};

		default:
			return state;
	}
};

export default SignUpReducer;
