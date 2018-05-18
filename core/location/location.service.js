const Location = require("../../config/sequelize")["Location"];

class LocationService {
	static async createLocation({ name, country, uri_token }) {
		try {
			const location = await Location.create({
				name,
				country,
				uri_token
			});
			return [location, null];
		} catch (error) {
			return [error, null];
		}
	}

	static async getLocations() {
		try {
			const locationList = await Location.findAll();
			return [null, locationList];
		} catch (error) {
			return [error, null];
		}
	}
}

module.exports = LocationService;
