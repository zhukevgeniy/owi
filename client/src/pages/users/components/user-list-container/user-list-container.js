import React, { Component } from "react";
import UserList from "../user-list/user-list";
import { connect } from "react-redux";
import { getUserList } from "../../UsersActionCreators";
import {Container} from "reactstrap";

class UserListContainer extends Component {
	state = {
		userList: []
	};

	componentDidMount() {
		this.props.dispatch(getUserList());
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			userList: nextProps.users.list
		};
	}

	render() {
		return (
			<Container>
				<UserList users={this.state.userList} />
			</Container>
		);
	}
}

export default connect(state => ({
	users: state.users,
	router: state.router
}))(UserListContainer);
