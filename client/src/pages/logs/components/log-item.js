import React from "react";
import PropTypes from "prop-types";
import {
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText
} from "reactstrap";

const LogItem = ({ userID, qTime, qLocationID, qUserIP, qStatus }) => {
	return (
		<ListGroupItem>
			<ListGroupItemHeading>USER_ID: {userID}</ListGroupItemHeading>
			<ListGroupItemText>QUERY_TIME: {qTime}</ListGroupItemText>
			<ListGroupItemText>QUERY_LOCATION_ID: {qLocationID}</ListGroupItemText>
			<ListGroupItemText>QUERY_USER_IP: {qUserIP}</ListGroupItemText>
			<ListGroupItemText>QUERY_STATUS{qStatus}</ListGroupItemText>
		</ListGroupItem>
	);
};

LogItem.propTypes = {
	userID: PropTypes.string,
	qTime: PropTypes.string,
	qLocationID: PropTypes.string,
	qUserIP: PropTypes.string,
	qStatus: PropTypes.string
};

export default LogItem;
