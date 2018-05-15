import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import { routerMiddleware as router } from "react-router-redux";
import browserHistory from "./history";

const configureStore = (history, initialState) => {
	const routerMiddleware = router(history);

	const middlewares = [routerMiddleware];

	const enhancer = [applyMiddleware(...middlewares)];

	const store = createStore(rootReducer, initialState, compose(...enhancer));

	if (module.hot) {
		module.hot.accept("./reducers", () => {
			const nextReducer = require("./reducers").default;
			store.replaceReducer(nextReducer);
		});
	}

	return store;
};

const store = configureStore(browserHistory);

export default store;
