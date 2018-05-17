import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col } from "reactstrap";
import WeatherGreeting from "../weather-greeting/weather-greeting";
import { connect } from "react-redux";
import Loader from "../../../../common/loader/loader";
import WeatherSchedule from "../weather-schedule/weather-schedule";

class WeatherWidget extends Component {
	state = {
		isLoading: false,
		isLoaded: false
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			isLoading: nextProps.isLoading,
			isLoaded: nextProps.isLoaded
		};
	}

	render() {
		return (
			<Col xs={6} className={"title-container p-0"}>
				{(() => {
					if (this.state.isLoading) {
						return <Loader />;
					} else if (this.state.isLoaded) {
						return <WeatherSchedule />;
					} else {
						return <WeatherGreeting />;
					}
				})()}
			</Col>
		);
	}
}

export default connect(state => ({
	isLoading: state.weather.isLoading,
	isLoaded: state.weather.isLoaded
}))(WeatherWidget);
