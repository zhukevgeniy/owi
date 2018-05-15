import combineReducers from "redux/src/combineReducers";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
	router: routerReducer
});

export default rootReducer;
