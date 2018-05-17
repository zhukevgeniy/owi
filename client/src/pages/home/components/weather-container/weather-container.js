import React from "react";
import { Container, Row } from "reactstrap";
import WeatherWidget from "../weather-widget/weather-widget";
import WeatherSearchPanel from "../weather-search-panel/weather-search-panel";

const WeatherContainer = () => (
	<Container fluid>
		<Row>
			<WeatherWidget />
			<WeatherSearchPanel />
		</Row>
	</Container>
);

export default WeatherContainer;
