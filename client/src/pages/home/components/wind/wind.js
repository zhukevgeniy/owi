import React from "react";
import PropTypes from "prop-types";

const Wind = ({ wind }) => {
	return (
		<div>
			<span>Wind: </span>
			<span>{wind} </span>
			<span>km/h</span>
		</div>
	);
};

Wind.propTypes = {
	wind: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Wind;
