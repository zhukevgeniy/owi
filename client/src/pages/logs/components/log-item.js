import React from "react";
import PropTypes from "prop-types";
import {
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText
} from "reactstrap";

const LogItem = ({ userID, qTime, qLocationID, qUserIP, qResult, qStatus }) => {
	return (
		<ListGroupItem>
			<ListGroupItemHeading>{userID}</ListGroupItemHeading>
			<ListGroupItemText>{qTime}</ListGroupItemText>
			<ListGroupItemText>{qLocationID}</ListGroupItemText>
			<ListGroupItemText>{qUserIP}</ListGroupItemText>
			<ListGroupItemText>{qResult}</ListGroupItemText>
			<ListGroupItemText>{qStatus}</ListGroupItemText>
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
