import combineReducers from "redux/src/combineReducers";
import { routerReducer } from "react-router-redux";
import weatherReducer from "./pages/home/WeatherReducer"


const rootReducer = combineReducers({
	router: routerReducer,
	weather: weatherReducer
});

export default rootReducer;
