import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Loadable from "react-loadable";
import PropTypes from "prop-types";
import getPrivilege from "./helpers/get-privilege";

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

const PrivateRoute = ({ componentPath, ...rest }) => {
	const LoadableComponent = Loadable({
		loader: async () => await import(`${componentPath}`),
		loading: () => <div>loading</div>
	});

	return (
		<Route
			{...rest}
			render={props =>
				sessionStorage.getItem("jwt_token") ? (
					<Route {...rest} component={LoadableComponent} />
				) : (
					<Redirect
						to={{ pathname: "/sign-up", state: { from: props.location } }}
					/>
				)
			}
		/>
	);
};

const AdminRoute = ({ componentPath, ...rest }) => {
	const LoadableComponent = Loadable({
		loader: async () => await import(`${componentPath}`),
		loading: () => <div>loading</div>
	});

	return (
		<Route
			{...rest}
			render={props => {
				const token = sessionStorage.getItem("jwt_token");
				
				if (token) {
					const isAdmin = getPrivilege(token);

					if (isAdmin) {
						return <Route {...rest} component={LoadableComponent} />;
					} else {
						return <div>Forbidden</div>;
					}
				} else {
					return (
						<Redirect
							to={{ pathname: "/sign-up", state: { from: props.location } }}
						/>
					);
				}

			}}
		/>
	);
};

export default (
	<Switch>
		<PrivateRoute exact path={"/"} componentPath={"./pages/home/home-page"} />
		<AdminRoute
			exact
			path={"/locations"}
			componentPath={"./pages/locations/locations-page"}
		/>
		<LazyRoute
			exact
			path={"/sign-up"}
			componentPath={"./pages/sign-up/sign-up-page"}
		/>
		<LazyRoute
			exact
			path={"/logs"}
			componentPath={"./pages/logs/logs-page"}
		/>
		<AdminRoute
			exact
			path={"/users"}
			componentPath={"./pages/users/users-page"}
		/>
		<LazyRoute path={"*"} componentPath={"./pages/not-found/not-found"} />
	</Switch>
);
