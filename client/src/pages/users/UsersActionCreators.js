import UsersActionTypes from "./UsersActionTypes";
import UserService from "../../services/UserService";

export const fetchUserListRequest = () => {
	return {
		type: UsersActionTypes.FETCH_ALL_USERS_REQUEST
	};
};

export const fetchUserListSuccess = userList => {
	return {
		type: UsersActionTypes.FETCH_ALL_USERS_SUCCESS,
		payload: {
			userList
		}
	};
};

export const fetchUserListFail = error => {
	return {
		type: UsersActionTypes.FETCH_ALL_USERS_FAIL,
		payload: {
			error
		}
	};
};

export const getUserList = () => {
	return async dispatch => {
		dispatch(fetchUserListRequest());

		const [error, userList] = await UserService.getUsers();

		return error
			? dispatch(fetchUserListFail(error))
			: dispatch(fetchUserListSuccess(userList));
	};
};

export const removeUserFail = (error) => {
	return {
		type: UsersActionTypes.REMOVE_USER_FAIL,
		payload: {
			error
		}
	}
};

const removeUserSuccess = (email) => {
	return {
		type: UsersActionTypes.REMOVE_USER_SUCCESS,
		payload: {
			email
		}
	}
};


export const removeUserByEmail = (email) => {
	return async dispatch => {

		const error = await UserService.removeUserByEmail(email);


		return error
			? dispatch(removeUserFail(error))
			: dispatch(removeUserSuccess(email));
	}
};
