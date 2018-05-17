import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const LocationInput = ({ city, cityList, onChange, onInputChange, autoFocus=false }) => {
	const defaultVal = { name: "", c: "" };

	return (
		<React.Fragment>
			{/*<input type="text" name="city" placeholder="City..." onChange={this.props.onChange}/>*/}
			<Select
				autoFocus={autoFocus}
				className={".weather-search"}
				onChange={onChange}
				onInputChange={onInputChange}
				value={city}
				valueKey="c"
				labelKey="name"
				resetValue={defaultVal}
				options={cityList}
				noResultsText={"Searching..."}
				// backspaceRemoves={true}
				placeholder={"Start typing city..."}
			/>
		</React.Fragment>
	);
};

LocationInput.propTypes = {
	autoFocus: PropTypes.bool,
	city: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	cityList: PropTypes.array,
	onChange: PropTypes.func,
	onInputChange: PropTypes.func
};

export default LocationInput;
