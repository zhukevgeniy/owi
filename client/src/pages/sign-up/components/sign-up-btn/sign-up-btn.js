import React from "react";
import PropTypes from "prop-types";

const SignUpBtn = ({ value }) => (
	<div className="button">
		<button type="button">{value}</button>
	</div>
);

SignUpBtn.propTypes = {
	value: PropTypes.any
};

export default SignUpBtn;
