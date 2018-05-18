import React, { Component } from "react";
import { connect } from "react-redux";
import { getLocations } from "../../LocationActionCreators";

const withLocation = Component => {
	class WrapperComponent extends React.Component {
		state = {
			list: [1, 2, 3]
		};

		componentDidMount() {
			this.props.dispatch(getLocations());
		}

		static getDerivedStateFromProps(nextProps, prevState) {
			return {
				list: nextProps.location.list
			};
		}

		render() {
			return <Component list={this.state.list} />;
		}
	}

	return connect(state => ({
		location: state.location
	}))(WrapperComponent);
};

export default withLocation;
