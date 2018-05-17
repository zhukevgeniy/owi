class Status {
	constructor() {
		this.params = {
			error: null
		};
	}

	setFailWithError = error => {
		this.params.error = error;
	};

	setSuccess = () => {};

	isCompleted = () => this.params;
}

class LocationService {
	static getURI = () => process.env.REACT_APP_API_URI;

	static async saveLocation(location) {
		const uri = LocationService.getURI();
		const request = new Request(uri, {
			method: "POST",
			body: JSON.stringify({ location })
		});

		const status = new Status();

		try {
			const saveResponse = await fetch(request);
			const saveData = await saveResponse.json();
			status.setSuccess();
		} catch (error) {
			status.setFailWithError(error);
		} finally {
			return status;
		}
	}
}

export default LocationService;
