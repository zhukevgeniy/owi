import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SignUpContainer from "./components/sign-up-container/sign-up-container";

class SignUpPage extends Component {
	render() {
		return (
			<main>
				<SignUpContainer/>
			</main>
		);
	}
}

SignUpPage.propTypes = {};

export default SignUpPage;
