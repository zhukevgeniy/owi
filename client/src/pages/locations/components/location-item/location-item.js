import React from "react";
import PropTypes from "prop-types";
import {
	ListGroupItem,
	ListGroupItemHeading,
} from "reactstrap";

const LocationItem = ({ city }) => {
	return (
		<ListGroupItem>
			<ListGroupItemHeading>{city}</ListGroupItemHeading>
		</ListGroupItem>
	);
};

LocationItem.propTypes = {
	city: PropTypes.string.isRequired
};

export default LocationItem;
