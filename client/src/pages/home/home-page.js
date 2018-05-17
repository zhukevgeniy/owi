import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WeatherContainer from "./components/weather-container/weather-container";

class HomePage extends Component {
	render() {
		return (
			<div className="wrapper">
				<div className="main">
					<WeatherContainer/>
				</div>
			</div>
		);
	}
}

HomePage.propTypes = {};

export default HomePage;
