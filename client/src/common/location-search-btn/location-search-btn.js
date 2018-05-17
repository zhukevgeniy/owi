import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../../pages/home/WeatherActionCreators";

const LocationSearchBtn = props => {
	const getCityWeather = () => props.dispatch(getWeather());

	return <button onClick={getCityWeather}>Get weather</button>;
};

export default connect(state => ({
	weather: state.weather,
	router: state.router
}))(LocationSearchBtn);
