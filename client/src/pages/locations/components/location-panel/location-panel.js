import React, { Component } from "react";
import PropTypes from "prop-types";
import LocationInput from "../../../../common/location-input/location-input";
import { searchCityRequest } from "../../../home/WeatherActionCreators";
import { connect } from "react-redux";
import {addLocation} from "../../LocationActionCreators";

class LocationPanel extends Component {
	state = {
		value: "",
		cityList: []
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			cityList: nextProps.weather.completeResultList
		};
	}

	onChange = location => {
		this.props.dispatch(addLocation(location))
	};

	onInputChange = async inputValue => {
		this.props.dispatch(searchCityRequest(inputValue));
	};

	render() {
		return (
			<div>
				<LocationInput
					autoFocus
					city={this.state.value}
					cityList={this.state.cityList}
					onChange={this.onChange}
					onInputChange={this.onInputChange}
				/>
			</div>
		);
	}
}

LocationPanel.propTypes = {};

export default connect(state => ({
	weather: state.weather,
	router: state.router
}))(LocationPanel);
