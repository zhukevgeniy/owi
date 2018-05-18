import combineReducers from "redux/src/combineReducers";
import { routerReducer } from "react-router-redux";
import weatherReducer from "./pages/home/WeatherReducer";
import locationReducer from "./pages/locations/LocationReducer";

const rootReducer = combineReducers({
	router: routerReducer,
	weather: weatherReducer,
	location: locationReducer
});

export default rootReducer;
