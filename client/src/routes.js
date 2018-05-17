import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router";
import Loadable from "react-loadable";

const LazyRoute = props => {
	const { componentPath, ...rest } = props;

	const LoadableComponent = Loadable({
		loader: async () => await import(`${componentPath}`),
		loading: () => <div>loading</div>
	});

	return <Route {...rest} component={LoadableComponent} />;
};

LazyRoute.propTypes = {
	componentPath: PropTypes.string.isRequired
};

export default (
	<Switch>
		<LazyRoute path={"/"} componentPath={"./pages/home/home-page"} />
		<LazyRoute
			exact
			path={"/locations"}
			componentPath={"./pages/locations/locations-page"}
		/>
		<LazyRoute path={"*"} componentPath={"./pages/not-found/not-found"} />
	</Switch>
);
