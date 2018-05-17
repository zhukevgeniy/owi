class AuthService {

	constructor(uri) {
		this._uri = uri || process.env.REACT_APP_API_URI;
	}

	get uri() {
		return this._uri;
	}

	static async login({name, email, pwd}) {
		const uri = process.env.REACT_APP_API_URI;

		const request = new Request(uri, {
			method: "POST",
			headers: new Headers({
				"Content-Type": "application/json"
			}),
			body: JSON.stringify({
				name,
				email, pwd
			})
		});

		try {
			const response = await fetch(request);
			return await response.json();
		} catch (error) {
			return error
		}

	}
}

export default AuthService;
