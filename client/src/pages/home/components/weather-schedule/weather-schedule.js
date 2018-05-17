import React from "react";
import { Col, Container, Row } from "reactstrap";
import Temperature from "../temperature/temperature";
import WeatherIcon from "../weather-icon/weather-icon";
import { connect } from "react-redux";
import Wind from "../wind/wind";

const WeatherSchedule = ({ city, iconURL, description, temperature, wind }) => (
	<Container className={"weather-schedule"}>
		<Row>
			<Col className={"text-center"}>{city}</Col>
		</Row>
		<Row>
			<Col className={"weather-icon_container"}>
				<WeatherIcon icon={iconURL} />
			</Col>
		</Row>
		<Row>
			<Col xs={6}>
				<Temperature temperature={temperature.high} high />
			</Col>
		</Row>
		<Row>
			<Col xs={6}>
				<Temperature temperature={temperature.low} low />
			</Col>
		</Row>
		<Row>
			<Col>
				<Wind wind={wind} />
			</Col>
		</Row>
		<Row>
			<Col>Conditions: {description}</Col>
		</Row>
	</Container>
);

export default connect(state => ({
	city: state.weather.cityName,
	iconURL: state.weather.iconURL,
	description: state.weather.description,
	temperature: state.weather.temperature,
	wind: state.weather.wind
}))(WeatherSchedule);
