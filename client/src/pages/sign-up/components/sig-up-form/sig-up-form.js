import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { connect } from "react-redux";
import {signUpUser} from "../../SignUpActionCreators";

class SignUpForm extends Component {
	state = {
		name: "",
		email: "",
		password: ""
	};

	onSignUp = evt => {
		evt.preventDefault();

		const {name, email, password } = this.state;

		this.props.dispatch(signUpUser({name, email, password}))

	};

	onInputChange = evt => {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	};

	render() {
		return (
			<Form onSubmit={this.onSignUp}>
				<FormGroup row>
					<Label for="name-input" sm={2}>
						Name
					</Label>
					<Col sm={10}>
						<Input
							autoFocus
							type="name"
							name="name"
							id="name-input"
							placeholder="John Doe"
							onChange={this.onInputChange}
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for="email-input" sm={2}>
						Email
					</Label>
					<Col sm={10}>
						<Input
							type="email"
							name="email"
							id="email-input"
							placeholder="john.doe@gmail.com"
							onChange={this.onInputChange}
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for="pwd-input" sm={2}>
						Password
					</Label>
					<Col sm={10}>
						<Input
							type="password"
							name="password"
							id="pwd-input"
							placeholder="password"
							onChange={this.onInputChange}
						/>
					</Col>
				</FormGroup>
				<Button color="primary">Sign up</Button>
			</Form>
		);
	}
}

SignUpForm.propTypes = {};

export default connect(state => ({
	signup: state.signup,
	router: state.router
}))(SignUpForm);
