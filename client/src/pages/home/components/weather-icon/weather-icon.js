import React from "react";
import PropTypes from "prop-types";

const WeatherIcon = ({ icon }) => <img src={icon} alt="weather icon" width={"300px"} height={"300px"}/>;

WeatherIcon.propTypes = {
	icon: PropTypes.string.isRequired
};

export default WeatherIcon;
