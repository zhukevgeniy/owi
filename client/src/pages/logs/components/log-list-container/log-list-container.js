import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { getLogList } from "../../LogsActionCreators";
import LogList from "../log-list/log-list";

class LogListContainer extends React.Component {
	state = {
		list: []
	};

	componentDidMount() {
		this.props.dispatch(getLogList());
	}

	static getDerivedStateFromProps(nextProps, prevProps) {
		return {
			list: nextProps.logs.list
		};
	}

	render() {


		return (
			<Container>
				<LogList list={this.state.list} />
			</Container>
		);
	}
}

export default connect(state => ({
	logs: state.logs,
	router: state.router
}))(LogListContainer);
