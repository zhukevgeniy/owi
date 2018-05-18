import React from "react";
import { ConnectedRouter } from "react-router-redux";
import RouterList from "../../routes";
import { Provider } from "react-redux";
import "./App.css";
import Schedule from "../schedule/schedule";

const RouterListComponent = () => RouterList;

const App = ({ store, history }) => (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Schedule>
				<RouterListComponent />
			</Schedule>
		</ConnectedRouter>
	</Provider>
);

export default App;
