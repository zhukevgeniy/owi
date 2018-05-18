class Status {
	constructor() {
		this.params = {
			msg: "",
			error: null
		};
	}

	setFailWithError = error => {
		this.params.msg = error.message;
		this.params.error = error;
	};

	setSuccess = msg => {
		this.params.msg = msg;
	};

	isCompleted = () => !this.params.error;
}

class LocationService {
	static getURI = () => process.env.REACT_APP_SERVER_API_URI;

	static objectToQuerystring = obj => {
		return Object.keys(obj).reduce(function(str, key, i) {
			const delimiter = i === 0 ? "" : "&";
			const val = encodeURIComponent(obj[encodeURIComponent(key)]);
			return [str, delimiter, key, "=", val].join("");
		}, "");
	};

	static async saveLocation(location) {
		const uri = LocationService.getURI();
		const url = `${uri}/location`;
		const headers = new Headers({
			"Content-Type": "application/x-www-form-urlencoded"
		});

		const request = new Request(url, {
			method: "POST",
			headers,
			body: this.objectToQuerystring(location)
		});

		const status = new Status();

		try {
			const saveResponse = await fetch(request);
			const saveData = await saveResponse.json();

			status.setSuccess(saveData.msg);
		} catch (error) {
			status.setFailWithError(error);
		} finally {
			return status;
		}
	}

	static async getLocationList() {
		const uri = LocationService.getURI();
		const url = `${uri}/location`;

		try {
			const locationResponse = await fetch(url);
			const locationList = await locationResponse.json();

			return [null, locationList["RESULTS"]];
		} catch (error) {
			return [error, null];
		}
	}
}

export default LocationService;
