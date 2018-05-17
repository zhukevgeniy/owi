import React from "react";
import PropTypes from "prop-types";
import LocationItem from "../location-item/location-item";
import { ListGroup } from "reactstrap";

const LocationList = ({ list }) => {
	const renderLocationList = (item, key) => (
		<LocationItem city={item.city} key={key} />
	);

	return <ListGroup>{list.map(renderLocationList)}</ListGroup>;
};

LocationList.propTypes = {
	list: PropTypes.array
};

export default LocationList;
