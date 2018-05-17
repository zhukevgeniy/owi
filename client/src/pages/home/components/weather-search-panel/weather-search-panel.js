import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col} from "reactstrap";
import LocationForm from "../../../../common/location-form/location-form";

class WeatherSearchPanel extends Component {
	render() {
		return (
			<Col xs={6} className={"form-container"}>
				<LocationForm/>
			</Col>
		);
	}
}

WeatherSearchPanel.propTypes = {};

export default WeatherSearchPanel;
