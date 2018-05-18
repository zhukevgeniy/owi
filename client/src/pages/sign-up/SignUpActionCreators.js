import AuthService from "../../services/AuthService";
import SignUpActionTypes from "./SignUpActionTypes";
import { routerActions } from "react-router-redux";

const setToken = token => {
	sessionStorage.setItem("jwt_token", token);
};

export const singUpSuccess = jwtToken => {
	return {
		type: SignUpActionTypes.SIGN_UP_FETCH_SUCCESS,
		payload: {
			jwtToken
		}
	};
};

export const signUpFail = error => {
	return {
		type: SignUpActionTypes.SIGN_UP_FETCH_SUCCESS,
		payload: {
			error
		}
	};
};

const redirectToHomePage = () => routerActions.push("/");

export const singUpSuccessAndRedirect = jwtToken => {
	return async dispatch => {
		setToken(jwtToken);
		dispatch(redirectToHomePage());

		return dispatch(singUpSuccess(jwtToken));
	};
};

export const signUpUser = ({ name, email, password }) => {
	return async dispatch => {
		const [error, jwtToken] = await AuthService.signup({
			name,
			email,
			password
		});

		return error
			? dispatch(signUpFail(error))
			: dispatch(singUpSuccessAndRedirect(jwtToken));
	};
};
