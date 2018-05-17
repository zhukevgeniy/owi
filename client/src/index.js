import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./modules/App/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import history from "./history";

import 'bootstrap/dist/css/bootstrap.min.css';
import './react-select.css';

ReactDOM.render(
	<App store={store} history={history}/>,
	document.getElementById("root")
);

registerServiceWorker();
