import React, { Component } from "react";
import PropTypes from "prop-types";
import LocationSearchBtn from "../location-search-btn/location-search-btn";
import LocationInput from "../location-input/location-input";
import {Col, Form, FormGroup} from "reactstrap";

const LocationForm = () => {

	const onSubmit = (evt) => {
		evt.preventDefault();
	};

	return (
		<Form onSubmit={onSubmit} >
			<FormGroup row>
				<Col>
					<LocationInput />
				</Col>
			</FormGroup>
			<LocationSearchBtn />
		</Form>
	);
};

LocationForm.propTypes = {};

export default LocationForm;
