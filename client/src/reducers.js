import combineReducers from "redux/src/combineReducers";
import { routerReducer } from "react-router-redux";
import weatherReducer from "./pages/home/WeatherReducer";
import locationReducer from "./pages/locations/LocationReducer";
import signUpReducer from "./pages/sign-up/SignUpReducer";
import usersReducer from "./pages/users/UsersReducer";
import logsReducer from "./pages/logs/LogsReducer";

const rootReducer = combineReducers({
	router: routerReducer,
	weather: weatherReducer,
	location: locationReducer,
	signup: signUpReducer,
	users: usersReducer,
	logs: logsReducer
});

export default rootReducer;
