import React from "react";
import PropTypes from "prop-types";

const Temperature = (props) => {
	return (
		<div>
			<span>{props.high ? "max" : "min"}</span>
			<span>&nbsp;</span>
			<span>{props.temperature.celsius}</span>
			<span>&#x2103;</span>
		</div>
	);
};

Temperature.propTypes = {
	temperature: PropTypes.shape({
		fahrenheit: PropTypes.string.isRequired,
		celsius: PropTypes.string.isRequired
	})
};

export default Temperature;
