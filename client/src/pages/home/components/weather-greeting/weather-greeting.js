import React, {Component} from 'react';
import PropTypes from 'prop-types';

class WeatherGreeting extends Component {
	render() {
		return (
			<div className={"title-container_wrapper"}>
				<h1 className="title-container__title">OWI</h1>
				<h3 className="title-container__subtitle">Find out temperature, conditions and more...</h3>
			</div>
		);
	}
}

WeatherGreeting.propTypes = {};

export default WeatherGreeting;
