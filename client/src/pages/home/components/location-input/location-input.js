import React, { PureComponent } from "react";
import Select from "react-select";
import { searchCityRequest, setCity } from "../../WeatherActionCreators";
import { connect } from "react-redux";

class LocationInput extends PureComponent {
	state = {
		value: "",
		cityList: []
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			cityList: nextProps.weather.completeResultList
		};
	}

	onChange = opts => {
		console.log(opts);

		this.setState(
			{
				value: {
					name: opts.name,
					c: opts.c
				}
			},
			() => this.setCityCode({ cityCode: opts["l"], cityName: opts.name })
		);
	};

	setCityCode = city => this.props.dispatch(setCity(city));

	getWeatherAutoComplete = async inputValue => {
		this.props.dispatch(searchCityRequest(inputValue));
	};

	render() {
		return (
			<React.Fragment>
				{/*<input type="text" name="city" placeholder="City..."/>*/}
				<Select
					className={".weather-search"}
					onChange={this.onChange}
					onInputChange={this.getWeatherAutoComplete}
					value={this.state.value}
					valueKey="c"
					labelKey="name"
					resetValue={{ name: "", c: "" }}
					options={this.state.cityList}
					noResultsText={"Searching..."}
					// backspaceRemoves={true}
					placeholder={"Start typing city..."}
				/>
			</React.Fragment>
		);
	}
}

LocationInput.propTypes = {};

export default connect(state => ({
	weather: state.weather,
	router: state.router
}))(LocationInput);
