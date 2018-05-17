import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import PropTypes from "prop-types";
import LocationList from "./components/location-list/location-list";
import LocationPanel from "./components/location-panel/location-panel";

import "./location-page.css";

const LocationPage = () => {
	const list = [
		{
			city: "Milan"
		},
		{
			city: "Monaco"
		},
		{
			city: "St. Pit"
		}
	];

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
						<LocationList list={list} />
					</Col>
				</Row>
			</Container>
		</main>
	);
};

LocationPage.propTypes = {};

export default LocationPage;
