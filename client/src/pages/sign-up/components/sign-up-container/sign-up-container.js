import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SignUpForm from "../sig-up-form/sig-up-form";
import {Container} from "reactstrap";

import "./sign-up-container.css"

class SignUpContainer extends Component {
	render() {
		return (
			<Container className={"sign-up-container"}>
				<SignUpForm/>
			</Container>
		);
	}
}

SignUpContainer.propTypes = {};

export default SignUpContainer;
