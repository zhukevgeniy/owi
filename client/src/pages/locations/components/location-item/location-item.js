import React from "react";
import PropTypes from "prop-types";
import {
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText
} from "reactstrap";

const LocationItem = ({ city }) => {
	return (
		<ListGroupItem>
			<ListGroupItemHeading>List group item heading</ListGroupItemHeading>
			<ListGroupItemText>{city}</ListGroupItemText>
		</ListGroupItem>
	);
};

LocationItem.propTypes = {
	city: PropTypes.string.isRequired
};

export default LocationItem;
