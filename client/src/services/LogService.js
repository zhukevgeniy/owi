class LogService {
	static getURI = () => `${process.env.REACT_APP_SERVER_API_URI}/logs`;

	static async getLogs() {
		const uri = this.getURI();

		try {
			const logListResponse = await fetch(uri);
			const logListDate = await logListResponse.json();
			const logList = logListDate.logs;

			return [null, logList];
		} catch (error) {
			return [error, null];
		}
	}
}

export default LogService;
