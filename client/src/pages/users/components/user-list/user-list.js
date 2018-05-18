import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "reactstrap";
import UserItem from "../user-item/user-item";

const UserList = ({ users }) => {
	const renderUser = (user, key) => {
		return (
			<UserItem
				key={key}
				name={user.name}
				email={user.email}
				privilege={user.isAdmin}
			/>
		);
	};

	return <ListGroup>{users.map(renderUser)}</ListGroup>;
};

UserList.propTypes = {
	users: PropTypes.array
};

export default UserList;
