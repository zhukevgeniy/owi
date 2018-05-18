import React, { Component } from "react";
import PropTypes from "prop-types";
import LocationSearchBtn from "../location-search-btn/location-search-btn";
import LocationInput from "../location-input/location-input";
import { Col, Form, FormGroup } from "reactstrap";
import {
	searchCityRequest,
	setCity
} from "../../pages/home/WeatherActionCreators";
import { connect } from "react-redux";

class LocationForm extends React.PureComponent {
	state = {
		value: "",
		cityList: []
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			cityList: nextProps.weather.completeResultList
		};
	}

	onSubmit = evt => {
		evt.preventDefault();
	};

	onCityChange = opts => {
		console.log(opts);

		this.setState(
			{
				value: {
					name: opts.name,
					c: opts.c
				}
			},
			() => this.setCityCode({ cityCode: opts["uri_token"], cityName: opts.name })
		);
	};

	setCityCode = city => this.props.dispatch(setCity(city));

	getWeatherAutoComplete = async inputValue => {
		const isUserRequest = true;
		this.props.dispatch(searchCityRequest(inputValue, isUserRequest));
	};

	render() {
		return (
			<Form onSubmit={this.onSubmit}>
				<FormGroup row>
					<Col>
						<LocationInput
							city={this.state.value}
							cityList={this.state.cityList}
							onChange={this.onCityChange}
							onInputChange={this.getWeatherAutoComplete}
						/>
					</Col>
				</FormGroup>
				<LocationSearchBtn />
			</Form>
		);
	}
}

LocationForm.propTypes = {};

export default connect(state => ({
	weather: state.weather,
	router: state.router
}))(LocationForm);
