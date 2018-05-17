import React from "react";
import { ConnectedRouter } from "react-router-redux";
import RouterList from "../../routes";
import { Provider } from "react-redux";
import "./App.css";

const RouterListComponent = () => RouterList;

const App = ({ store, history }) => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<RouterListComponent />
		</ConnectedRouter>
	</Provider>
);

export default App;
