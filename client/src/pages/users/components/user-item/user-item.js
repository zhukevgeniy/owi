import React from "react";
import PropTypes from "prop-types";
import {
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText
} from "reactstrap";

const UserItem = ({ name, email, privilege }) => {
	return (
		<ListGroupItem>
			<ListGroupItemHeading>{name}</ListGroupItemHeading>
			<ListGroupItemText>email: {email}</ListGroupItemText>
			<ListGroupItemText>isAdmin: {privilege.toString()}</ListGroupItemText>
		</ListGroupItem>
	);
};

UserItem.propTypes = {
	name: PropTypes.string,
	email: PropTypes.string,
	privilege: PropTypes.bool
};

export default UserItem;
