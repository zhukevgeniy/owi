import React from "react";
import PropTypes from "prop-types";
import LocationItem from "../location-item/location-item";
import { ListGroup } from "reactstrap";
import withLocation from "../with-location/with-location";

const LocationList = props => {
	const renderLocationList = (item, key) => (
		<LocationItem city={item.name} key={key} />
	);

	return <ListGroup>{props.list.map(renderLocationList)}</ListGroup>;


};

LocationList.propTypes = {
	list: PropTypes.array
};

export default withLocation(LocationList);
