import LogsActionTypes from "./LogsActionTypes";
import LogService from "../../services/LogService";

export const fetchLogListRequest = () => {
	return {
		type: LogsActionTypes.FETCH_ALL_LOGS_REQUEST
	};
};

export const fetchLogListSuccess = logList => {
	return {
		type: LogsActionTypes.FETCH_ALL_LOGS_SUCCESS,
		payload: {
			logList
		}
	};
};

export const fetchLogListFail = error => {
	return {
		type: LogsActionTypes.FETCH_ALL_LOGS_FAIL,
		payload: {
			error
		}
	};
};

export const getLogList = () => {
	return async dispatch => {
		dispatch(fetchLogListRequest());

		const [error, logList] = await LogService.getLogs();

		return error
			? dispatch(fetchLogListFail(error))
			: dispatch(fetchLogListSuccess(logList));
	};
};
