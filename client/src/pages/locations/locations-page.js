import React from "react";
import { Col, Container, Row } from "reactstrap";
import LocationList from "./components/location-list/location-list";
import LocationPanel from "./components/location-panel/location-panel";

import "./location-page.css";

const LocationPage = () => {
	return (
		<main>
			<Container className={"location-container"}>
				<Row className={"location-panel__wrapper"}>
					<Col>
						<LocationPanel />
					</Col>
				</Row>
				<Row>
					<Col>
						<LocationList />
					</Col>
				</Row>
			</Container>
		</main>
	);
};


export default LocationPage;
