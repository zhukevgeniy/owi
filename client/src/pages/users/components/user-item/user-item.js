import React from "react";
import PropTypes from "prop-types";
import {
	Button,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText
} from "reactstrap";
import { connect } from "react-redux";
import {removeUserByEmail} from "../../UsersActionCreators";

const UserItem = (props) => {
	const onRemoveUser = () => {
		props.dispatch(removeUserByEmail(props.email))
	};

	return (
		<ListGroupItem>
			<ListGroupItemHeading>{props.name}</ListGroupItemHeading>
			<ListGroupItemText>email: {props.email}</ListGroupItemText>
			<ListGroupItemText>isAdmin: {props.privilege.toString()}</ListGroupItemText>
			<Button onClick={onRemoveUser}>Remove item</Button>
		</ListGroupItem>
	);
};

UserItem.propTypes = {
	name: PropTypes.string,
	email: PropTypes.string,
	privilege: PropTypes.bool
};

export default connect(state => ({
	users: state.users,
	router: state.router
}))(UserItem);
